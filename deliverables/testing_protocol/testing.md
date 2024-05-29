# Testing Protocol

Our team created a series of tests that to perform in order to verify that Seattle Safe Haven meets functional requirements.

##  General Test Practices

Manual test:
- Use the Chrome Inspect feature to see if each page functions as it should. 
- Run the web app and try multiple behaviors to see if these functions are working correctly.
  
Automated test:

Use JavaScript to assert if the map’s properties and functionalities are correct.
Jest or React testing library script to check the outputs with incorrect input
Explanation of Homepage.test.js

## Unit Tests

### Feature 1: Resource Map Filter

**Feature:** Filter resources on the map by category (shelter, legal aid, etc.) and accessibility needs (mobility, hearing, vision).

**Test Cases:**

**1. Filter by Category - Valid Input**

This test verifies that the map filter functions correctly when a valid category button is clicked (e.g., shelter).

**Input:**

* User clicks the "Shelter" button on the map filter.

**Output:**

* The map displays only shelters within the selected area.
* Any previously selected categories or accessibility filters are cleared.

**Pass Criteria:**

* The map markers should only represent shelters.
* No markers from other categories (legal aid, medical care, etc.) should be displayed.

**2. Filter by Accessibility Needs - Valid Input**

This test verifies that the map filter functions correctly when a valid accessibility button is clicked (e.g., mobility).

**Input:**

* User clicks the "Mobility" button on the map filter.

**Output:**

* The map displays only resources with accessibility information indicating they are mobility-accessible.
* Any previously selected categories or accessibility filters are cleared.

**Pass Criteria:**

* Map markers should only represent resources marked as mobility-accessible.
* No markers from other accessibility categories (hearing, vision) or resource categories (shelter, legal aid, etc.) should be displayed.

**3. Multiple Category Filter - Valid Input**

This test verifies that the map filter functions correctly when multiple category buttons are clicked (e.g., shelter and medical care).

**Input:**

* User clicks the "Shelter" button and then the "Medical Care" button on the map filter.

**Output:**

* The map displays only shelters and medical care facilities within the selected area.
* Any previously selected accessibility filters are cleared.

**Pass Criteria:**

* Map markers should represent only shelters and medical care facilities.
* No markers from other categories (legal aid, food bank, etc.) or accessibility categories (hearing, vision) should be displayed.

**4. Multiple Accessibility Filter - Valid Input**

This test verifies that the map filter functions correctly when multiple accessibility buttons are clicked (e.g., mobility and hearing).

**Input:**

* User clicks the "Mobility" button and then the "Hearing" button on the map filter.

**Output:**

* The map displays only resources with accessibility information indicating they are both mobility-accessible and hearing-accessible.
* Any previously selected category filters are cleared.

**Pass Criteria:**

* Map markers should represent only resources marked as both mobility-accessible and hearing-accessible.
* No markers from other accessibility categories (vision) or resource categories (shelter, legal aid, etc.) should be displayed.

**5. Combined Category and Accessibility Filter - Valid Input**

This test verifies that the map filter functions correctly when both category and accessibility buttons are clicked (e.g., shelter and mobility).

**Input:**

* User clicks the "Shelter" button and then the "Mobility" button on the map filter.

**Output:**

* The map displays only mobility-accessible shelters within the selected area.

**Pass Criteria:**

* Map markers should represent only mobility-accessible shelters.
* No markers from other accessibility categories (hearing, vision) or resource categories (legal aid, medical care, etc.) should be displayed.

**6. Clear Filters**

This test verifies that the "Clear" button on the map filter functions correctly.

**Input:**

* User clicks various category and/or accessibility buttons on the map filter.
* User then clicks the "Clear" button.

**Output:**

* The map displays all available resources within the selected area.
* All previously selected filters are cleared.

**Pass Criteria:**

* All resource category markers should be displayed on the map.
* No filters should be visually selected on the map filter interface.

**7. Invalid Input**

This test verifies that the map filter handles invalid user input gracefully (e.g., clicking non-existent buttons).

**Input:**

* User clicks on an element outside the designated map filter area.

**Output:**

* No map filter options are changed.
* No errors or unexpected behavior occur.

**Pass Criteria:**

* The map and filter interface should function normally.
* No filters should be applied or cleared unintentionally.

### Feature 2: Security Alert and Safety Exit Button 

**Test Cases:**

This test verifies that the map filter functions correctly when a valid category button is clicked (e.g., shelter).

**Input:**

* User clicks the "Shelter" button on the map filter.

**Output:**

* The map displays only shelters within the selected area.
* Any previously selected categories or accessibility filters are cleared.

**Pass Criteria:**

* The map markers should only represent shelters.
* No markers from other categories (legal aid, medical care, etc.) should be displayed.
