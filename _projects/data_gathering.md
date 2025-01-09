---
layout: single
title: "Data Gathering and Resource Allocation Tracker"
permalink: /projects/data_gathering/
author_profile: true
---

## Overview

This project leverages an AutoHotkey script to track student ID numbers copied to the clipboard during an enrollment event. The program logs these IDs into an Access database, enabling real-time monitoring and analysis of staff activity. 

By implementing this solution, I was able to:
- Track which staff members copied IDs and their activity levels.
- Identify where staff were working during the event.
- Gather insights into when and how many IDs were processed.
- Optimize future resource allocation by analyzing gathered data.

The system provided a centralized method for logging clipboard activity across multiple staff members and helped streamline enrollment events.

---

## Features

- **Real-Time Clipboard Monitoring**: Automatically detects 9-digit student ID numbers copied to the clipboard.
- **Access Database Integration**: Stores all copied IDs into a shared Access database.
- **Staff-Level Tracking**: Logs activity by individual staff members to monitor workload and coverage.
- **Scalability**: A dedicated program for each staff member ensures seamless tracking across the team.

---

## Technologies Used

- AutoHotkey
- Microsoft Access
- SQL for database interactions
- Windows Clipboard Monitoring
