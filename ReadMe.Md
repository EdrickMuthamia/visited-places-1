Visited Places Project
A simple JavaScript application that tracks and displays places a user has visited.
Version: 1.0.0
Date: April 2025
By: Angel

Description
The Visited Places project allows users to track places they have visited. The application allows users to add new places, store them locally in the browser using localStorage, and view the list of visited places. Users can also remove places from the list.

This project uses JavaScript, HTML, and CSS to manage and display a list of visited places. The list is persistent across page reloads thanks to the use of localStorage.

Features
Add a Place: Users can add places with a name, date visited, and address.

Remove a Place: Users can remove a place from the list.

Persistent Data: Places are saved in localStorage, ensuring the data is available even after page reloads.

Sort & Filter: Users can sort the places by name or visit date and filter the list by name.

Feedback: Users receive confirmation messages after adding or removing places.

Setup/Installation Requirements
Clone this repository to your local machine or download the project files.

Open the index.html file in your preferred browser.

There is no server or database required for this application since it uses localStorage for saving the data.

Known Bugs
There are no known bugs in this version of the project.

If you encounter any bugs, please open an issue in the repository.

Technologies Used
HTML: Structure of the app.

CSS: Styling and layout of the app.

JavaScript: Logic for adding, removing, sorting, and filtering the places.

localStorage: Used to store the places list persistently.

How to Use
Add a New Place:

Fill out the form with the place name, date visited, and address.

Click Add Place to save it to the list.

View the List:

The places will be displayed below the form. Each entry shows the name, date visited, and address of the place.

Remove a Place:

Click the Remove button next to any place to remove it from both the list and localStorage.

Sort Places:

Use the dropdown menu to sort places by name or date visited.

Filter Places:

Use the search box to filter places by name.

Testing
The application has been manually tested for the following scenarios:

1. Adding Places:
Test case: Add a place with all fields filled in.

Expected result: The place is added to the list, stored in localStorage, and a success message appears.

2. Removing Places:
Test case: Remove a place by clicking the Remove button next to it.

Expected result: The place is removed from the list, deleted from localStorage, and a success message appears.

3. Data Persistence:
Test case: Reload the page after adding or removing places.

Expected result: The places list should remain unchanged (data persists due to localStorage).

4. Sorting and Filtering:
Test case: Sort the list by name or date visited.

Expected result: The places should be sorted in ascending order based on the chosen criteria.

Test case: Filter the list by name using the search box.

Expected result: Only places matching the search term are displayed.

Support and Contact Details
If you have any questions, issues, or suggestions, feel free to contact me at:

Email: angelliona38@gmail.com

Contact: +254 790781575

GitHub: GitHub Profile

License
This project is licensed under the MIT License.

Copyright (c) 2025 Angel