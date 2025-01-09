/*	;~ Description
 	Author: 			David Jenkins
	Last Modified By: 	David Jenkins
	Created on:			7/20/23
	Verified on:		
	Modified on:		


	Program Description:
		 This HotKey is used to populate ROAUSDF Value 19
		
			Banner 9:
				Make sure Banner 9 is open in Google Chrome
				Start in RBAABUD in the ID field
		
			CSV File:
				Start in the ID field, IDs are in a column

			Activation:
				Win-r to run script when active	
				Win-p to pause script when active
				Esc to exit script when active

	Notes:
		The Hotkey will ask if you're continuing the script.
		If you have not yet run this Hotkey, your answer will be no.
		If you have started running the Hotkey and need to continue, your answer will be yes.
*/

;~ Auto Execute Section
;---------------------
;----------------------------------------
	
#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
;~ #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
#SingleInstance, Force ; Forces a single instance of the script to run at all times.
#Include R:\HotKey Repository\Functions\Clipboard_Functions.ahk
#Include R:\HotKey Repository\Functions\Activate_Window_Functions.ahk
#Include R:\HotKey Repository\Banner 9\Aid Period Set-up\Functions\Aid_Period_Setup_Functions.ahk

;~ Super Global Variables
;~ ;---------------------
;~ ;----------------------------------------

global NDID	
global AidYear
global Decision
global Reason
global ExceptionIndicator

;~ Main Program
;---------------------
;----------------------------------------

#r::
{
    ; Prompt for Aid Year
    AidYear := ""
    InputBox, AidYear, Enter Aid Year,, , 300, 105  ; Adjust height

    ; Prompt the user to select the CSV file
    FileSelectFile, selectedFile, 3,, Select a CSV file, (*.csv)
    if (selectedFile = "")
    {
        MsgBox, You didn't select a file.
        return
    }

    FileRead, fileContent, %selectedFile%
    if (ErrorLevel)
    {
        MsgBox, Failed to read the file.
        return
    }

    rows := StrSplit(fileContent, "`n", "`r")
    rowCount := rows.MaxIndex() - 1

    ; Initialize a dictionary to store combined values
    combinedData := {}

    ; Process each row to combine values based on column C (NDID)
    Loop, % rowCount - 1
    {
        currentIndex := A_Index + 1 ; Start from 2nd row to skip header
        columns := StrSplit(rows[currentIndex], ",")

        NDID := columns[3]
        Request := columns[4]
        Decision := columns[9]  ; Assuming column H is 8th (index 9)
        Reason := columns[10]    ; Assuming column I is 9th (index 10)
		ExceptionIndicator := columns[11] ; Assuming column J is 10th (index 11)
        Notes := columns[13]

        ; If the request is "other", replace Request with Notes
        if (Request = "other")
        {
            Request := Notes
        }

		
        ; Check if NDID already exists in the dictionary
        if (combinedData.HasKey(NDID))
        {
            combinedData[NDID].Requests .= "`n" . Request  ; Add a line return before appending the next request
        }
        else
        {
            combinedData[NDID] := { Requests: Request, Decision: Decision, Reason: Reason, ExceptionIndicator: ExceptionIndicator }
        }
    }

    ; Prompt to continue from a specific ID
    MsgBox, 4, Hotkey Initialization, Are you continuing the Hotkey?
    IfMsgBox Yes
    {
        ; Prompt for the starting NDID
        InputBox, startID, Enter Starting ID, Please enter the starting NDID:, ,300,150,,,,60
        
        ; Validate the input
        if (startID = "" || !RegExMatch(startID, "^\d+$"))
        {
            MsgBox, Invalid input. Please enter a valid NDID.
            ExitApp
        }
    }

    ; Calculate the number of NDIDs to be processed
    totalNDIDs := 0
    for key, value in combinedData
    {
        if (startID = "" || key >= startID)
            totalNDIDs++
    }

    ; Create an enhanced GUI for progress (always on top and styled)
    Gui, +AlwaysOnTop +ToolWindow
    Gui, Font, s12, Segoe UI  ; Set font size and type
    Gui, Font, s16, Segoe UI Bold  ; Increase font size for status text
    Gui, Add, Text, vProgressText w400, Processing 0 of %totalNDIDs%
    Gui, Show, NoActivate x1280 y720, Processing Status  ; Adjust x and y values to position the GUI

    ; Process each entry in the combinedData dictionary
    counter := 0
    for key, value in combinedData
    {
        ; If continuing, skip entries until reaching the specified startID
        if (startID != "" && key < startID)
            continue
        
        counter++
        ; Update the progress GUI
        GuiControl,, ProgressText, Processing %counter% of %totalNDIDs%
        
        NDID := key
        Requests := value.Requests
        Decision := value.Decision
        Reason := value.Reason
		ExceptionIndicator := value.ExceptionIndicator

        Activate_Google_Chrome_Window()

        ;~ NDID
        Sleep, 500

        ;~ Populate and Check ID field
        Sleep, 500
        Send, %NDID%
        Sleep, 500
        Send, {TAB}
        Sleep, 500
        NDID_Input_Check()
        Sleep, 500

        Sleep, 200
        Send, {Alt Down}
        Sleep, 100
        Send, {PgDn}
        Sleep, 100
        Send, {Alt Up}
        Sleep, 200

        click

        Sleep, 800
        Send, {F6}
        Sleep, 500

        Sleep, 200
        Send, %AidYear%
        Sleep, 500
        Send, +{TAB}
        Sleep, 500
        Aid_Year_Check()
        sleep, 500
        Send, {TAB}

        Sleep, 500
        Send, LSES
        sleep, 500
        Send, {TAB}
        Sleep, 500
		
		; Check if ExceptionIndicator is TRUE
		if (ExceptionIndicator ~= "i)TRUE") 
		{
			ExceptionNote := "- by exception -"
		}
		else 
		{
			ExceptionNote := ""
		}

        if (Decision ~= "i)^yes$") 
        {
            Sleep, 500 
            Send, Approved %ExceptionNote% for %Requests%
            Sleep, 200
        }
        else if (Decision ~= "i)^no$") 
        {
            Sleep, 500
            Send, Denied for %Requests% - %Reason%
            Sleep, 500 
        }
        else
        {
            MsgBox, 17, Decision Error, Hotkey has encountered an error regarding the Decision field for %NDID%. The Decision value was %Decision%.
        }

        Save_Changes_and_Start_Over()
    }

    ; Close the GUI after processing is complete
    Gui, Destroy

    ; After processing all rows, display a message
    MsgBox, All comments have been entered.
}

;~ Functions
;---------------------
;----------------------------------------

NDID_Input_Check()				
{
    x := 0	
    Loop
    {
        x++
        NDID_Check := ""
        Sleep, 100
        Copy_To_Clipboard()
        NDID_Check := clipboard
        
        if (NDID_Check = NDID and StrLen(NDID_Check) = 9)			
        {	
            sleep, 300
            break
        }			
        else if (x > 4)	
        {			
            MsgBox, 17, ID Error, Hotkey has encountered an error regarding the "ID" field.		
            ExitApp		
        }			
        else
        {	
            sleep, 300
            send, % NDID
        }
    }
    return
}

;~ Program Status Hotkeys
;---------------------
;----------------------------------------

Esc::ExitApp
#p::Pause
