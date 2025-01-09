#Persistent  ; Keep the script running.
MsgBox, 4,, Would you like to run the NDID Tracker?
IfMsgBox, No
    ExitApp
	
SetTimer, CheckClipboard, 500  ; Check the clipboard every 500 milliseconds.
Return

CheckClipboard:
    clipboardContent := Clipboard  ; Read the current clipboard content.
    if RegExMatch(clipboardContent, "^(9\d{8})$", numberToInsert)
    {
        if (StrLen(numberToInsert1) = 9)
        {
            InsertIntoAccessDB(numberToInsert1)
        }
    }
Return

InsertIntoAccessDB(numberToInsert) {
    dbPath := "R:\\FinAid Database\\The Rally\\NDID Tracker.mdb"  ; Update to your .mdb database path.
    tableName := "Lorie"  ; Your actual table name.
    columnName := "NDID"  ; Your actual column name for the 9-digit numbers.

    adoConnection := ComObjCreate("ADODB.Connection")
    connectionString := "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" . dbPath
    Try {
        adoConnection.Open(connectionString)
    } Catch e {
        return
    }

    sqlSelect := "SELECT COUNT(*) FROM [" . tableName . "] WHERE [" . columnName . "] = '" . numberToInsert . "'"
    Try {
        adoRecordset := adoConnection.Execute(sqlSelect)
    } Catch e {
        adoConnection.Close()
        return
    }
    
    ; If the record does not exist, proceed to insert.
    if (adoRecordset.Fields.Item(0).Value = 0)
    {
        sqlInsert := "INSERT INTO [" . tableName . "] ([" . columnName . "]) VALUES ('" . numberToInsert . "')"
        Try {
            adoConnection.Execute(sqlInsert)
        } Catch e {
        }
    }

    adoConnection.Close()
    adoRecordset := ""
    adoConnection := ""
}
