# Testing Protocol

Our team created a series of tests that to perform in order to verify that Seattle Safe Haven meets functional requirements.

##  General Test Practices

Manual test:
- Use the Chrome Inspect feature to see if each page functions as it should. 
- Run the web app and try multiple behaviors to see if these functions are working correctly.
  
Automated test:

Use JavaScript to assert if the map’s properties and functionalities are correct.

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

### Feature 2: Security Alert and Quick Escape Button

**8. Security Alert Test Cases:**
This test verifies that a security alert automatically appears when a user logs onto the Seattle Safe Haven website to help protect users who might be in vulnerable situations. The security alert also provides users more resources and information on safe internet browsing. 


**Input:**
- User logs onto the Seattle Safe Haven website 


**Output:**
- They will be presented with a security alert and by pressing the ‘Ok’ button they will be directed to the Seattle Safe Haven home page

**Pass Criteria:**
- The security alert automatically appears when the user opens up the website and when the ‘Ok’ button is clicked the security alert will close. 

**8. Quick Escape/Exit Button Test Cases:**
This test seeks to make sure that the ‘Exit’ button present on the Seattle Safe Haven website pages and when pressed will automatically redirects the user to Google. The ‘Exit’ button ensures user safety and trust with the Seattle Safe Haven website by providing users with an extra layer of security.

**Input:**
- User presses the ‘Exit’ button on the any of Seattle Safe Haven website pages


**Output:**
- The user will automatically be redirected to Google 

**Pass Criteria:**
- The ‘Exit’ button redirects users to Googles from the Seattle Safe Haven website
- The ‘Exit’ button is present throughout the Seattle Safe Haven including the Home, Connect, Find Help, and Identify Abuse pages. 



##  Known Bugs and Solutions

### Bug #1: Intermittent 502 Bad Gateway Error (Mobile & Desktop)

**Description:** Users occasionally encounter a 502 Bad Gateway error message when trying to access the Seattle Safe Haven website, on both mobile and desktop devices. 

**Workarounds for Users:**
* Try reloading the page: A simple refresh can often resolve the issue. Click the reload button in your browser (usually a circular arrow icon) or press F5 on your keyboard.
* Leave and come back: Sometimes exiting the website and returning can establish a new connection and clear any temporary glitches.

**Long-Term Solutions (In Progress):**
* Implement a retry mechanism: We're working on programming the website to automatically retry loading the page after a brief delay (a few seconds) if a 502 error occurs initially. This can often resolve temporary server issues.
* Monitor server health: We hope to implement website monitoring tools to proactively identify and address server-side issues that might contribute to 502 errors.

### Bug #2: Mobile Responsiveness Issues

**Description:** Users on mobile devices may encounter issues with the website's responsiveness, impacting navigation and accessibility.

* Exit Button Relocation: The discreet exit button, crucial for user safety, might unintentionally shift location on some mobile screens, potentially making it difficult to find quickly.
* Zooming Requirement: Users might need to frequently zoom in and out to access different website sections or read text comfortably, hindering a smooth browsing experience.

**Workarounds for Users:**

* Exit Button: If the exit button is difficult to locate, try scrolling to the bottom or top of the page. 
* Zooming: Utilize pinch-to-zoom gestures to enlarge specific areas and improve readability. Use the zoom-out feature to view the whole screen.
  
**Long-Term Solutions (In Progress):**

* Responsive Design Refinement: We hope to refine the website's responsive design to ensure consistent element placement across various mobile screen sizes and devices. The exit button will be anchored in a specific location to guarantee easy access on all mobile devices.
* Fixed-Element Exit Button: We're exploring the possibility of implementing a fixed-position exit button that remains visible on the screen regardless of scrolling, further enhancing its accessibility and safety function.
* Fluid Text and Layout: We hope to optimize website elements like text size and layout to adapt dynamically to different screen resolutions. This will minimize the need for frequent zooming and ensure a comfortable user experience on all mobile devices.
