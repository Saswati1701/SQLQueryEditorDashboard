## Steps to run project locally
- ```git clone https://github.com/Saswati1701/SQLQueryEditorDashboard.git```
- ```npm install```
- ```npm start```

## Live Link
- https://sql-query-editor-saswati-mahanta.netlify.app/

## Performance Report
![image](https://github.com/Saswati1701/SQLQueryEditorDashboard/assets/92461669/3ba5d55c-71a2-487c-a1bd-a56cde13fd7d)

## Frameworks and Libraries used
- JavaScript framework used: React
- Dependencies used: React-redux, React-icons, React-modal, uuid

## Overview of Project
- This SQL query editor allows users to establish a connection to the database by entering the host, port, user name, and password. It renders a dashboard that displays the structure of the databases present in the respective connection to the user. User can now add their queries and run it to get the response in a tabular form. User can form advanced features like opening multiple tabs for executing multiple queries, saving the queries, and navigating through multiple connections at a time. These functions is carried out seamlessly.

## Features of Project
1. ADD CONNECTION:\
    This feature allows the user to add multiple connections and validates connections by their hostname, port name, user name, and password.
2. DISPLAY DB STRUCTURE:\
    Each connection holds multiple databases and each database holds multiple tables. This complete tree is displayed recursively in a dropdown format in the DB structure section with onClick eventListener to expand and collapse.
3. QUERY EDITOR:\
    The query editor provides a text area to enter the SQL queries and a control panel to add tabs, run queries, and save queries.
4. SAVED QUERIES:\
    The saved queries section sports a list of saved queries.
5. PAGE LOAD TIME:\
    Page load time is measured by Chrome Devtools' Lighthouse. Page load time ~ LCP = 0.4s
   ![image](https://github.com/Saswati1701/SQLQueryEditorDashboard/assets/92461669/b4da4368-722b-4e5c-a670-c10e49c3ed82)  
6. OPTIMISATIONS:\ 
    - Designed a redux store to optimize the data flow in the application which also helped in designing complex features conveniently.
    - Optimized re-renders by using react-redux and employing store splitting.
    - Implemented pagination in the query's response table to render large amounts of rows.


