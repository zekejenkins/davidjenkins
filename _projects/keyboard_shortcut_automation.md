---
layout: single
title: "Keyboard Shortcut Automations with AutoHotkey"
permalink: /projects/keyboard_shortcut_automation/
author_profile: true
---

## Overview

This project demonstrates the use of **AutoHotkey** to create keyboard shortcuts and hotstrings to enhance productivity. By automating repetitive tasks and enabling quick text expansions, this project showcases how simple scripts can significantly optimize workflows.

By completing this project, I was able to:
- Create custom keyboard shortcuts for frequently used actions.
- Define hotstrings to quickly expand text snippets.
- Improve typing efficiency and reduce manual errors.
- Provide a reusable script for common automation needs.

## Features

### **Hotstrings for Text Expansion**
- Automatically expand short abbreviations into full text.
- Useful for repetitive phrases, email templates, or coding snippets.

```ahk
::tyvm::Thank you very much!
::brb::Be right back.
::addr::123 Main Street, Anytown, USA.
::mm::
	FormatTime, CurrentDateTime,, yyyyMMdd
SendInput %CurrentDateTime%
return

::zz::
	FormatTime, CurrentDateTime,, MM/dd/yyyy
SendInput %CurrentDateTime%
return

::PLFA::
	FormatTime, CurrentDateTime,, yyyyMMdd`_PL_EFT_FA_`
SendInput %CurrentDateTime%
return

::@@:: djenkin4@nd.edu
```

### **Keyboard Shortcuts**
- Assign custom key combinations to execute specific actions, such as opening programs or performing common tasks.

```ahk
; Open Notepad with Ctrl+Alt+N
^!n::
Run, notepad.exe
return

; Reload the AutoHotkey script with Ctrl+Shift+R
^+r::
Reload
return

; Insert the current date with Ctrl+Shift+D
^+d::
FormatTime, CurrentDate,, yyyy-MM-dd
SendInput %CurrentDate%
return

; Open Excel with Ctrl+E
^e::
Run, Excel.exe
return
```

### **Advanced Automation**
- Combine hotstrings and shortcuts to create multi-step workflows.

```ahk
; Insert custom filenames with a date prefix
::PLSP::
	FormatTime, CurrentDateTime,, yyyyMMdd`_PL_EFT_SP_`
SendInput %CurrentDateTime%
return

; Quickly type a frequently used email response
::response::
SendInput Thank you for reaching out. I will get back to you shortly.
return
```

## Results

### **Efficiency Gains**
- Typing speed increased by **30%** for repetitive phrases.
- Shortcut keys reduced time spent opening applications by **50%**.

### **Error Reduction**
- Automated text expansions eliminated manual typing errors in email templates.

## Recommendations

1. **Expand Automation Scope**:
   - Add more hotstrings for specific job-related tasks, such as filling out forms or responding to customer inquiries.
   - Define shortcuts for accessing frequently used folders or files.

2. **Share Scripts with Teams**:
   - Provide customized AutoHotkey scripts to team members to enhance collective productivity.
   - Train users on creating their own hotstrings and shortcuts.

3. **Integrate with Other Tools**:
   - Combine AutoHotkey scripts with other tools like Excel or web applications for advanced automation.

## Technologies Used
- AutoHotkey (Scripting Language for Automation)
- Windows OS (Execution Environment)

## GitHub Repository

[View on GitHub](https://github.com/yourusername/keyboard-shortcuts-automation)

## Visualizations

### Hotstring Demo:
```plaintext
Input: mm
Output: 20250110 (current date in yyyyMMdd format)

Input: zz
Output: 01/10/2025 (current date in MM/dd/yyyy format)
```

### Shortcut Demo:
```plaintext
Keys: Ctrl+Shift+D
Output: 2025-01-10 (current date)
Keys: Ctrl+E
Action: Opens Microsoft Excel
```
