#  Match Master
## By Barrie Millar
### A Themed Memory Card Matching Game

# Table of Contents

1. [Introduction](#introduction)
2. [Project Design](#design)
3. Security
2. [Instructions and Features](#instructions)
3. [Development Considerations](#development)
4. [Testing](#testing)
5. [Future Development](#future)
6. [Project Deployment](#deployment)
7. [Technical Facts](#technical-facts)
8. [Repository and Project Board](#repository)
9. [Credits](#credits)

## Introduction

Welcome to Match Master, a site designed around playing a sports themed memory card matching game. The project allows a user to try to match two identical cards from a selection every round. If the cards chosen are not identical, the cards are hidden again and the game continues. If they match, both are left face-up and the user can pick two new cards. The game continues until all cards are face-up and a final score given. The website is based around a database and the details of every game are stored and statistics calculated. Players can therefore see their progress over time.

This website was created as part of the final project of the "16-Week High-Performance Full Stack Skills Bootcamp" which officially ranged from the 31th of July, 2024 until the 14th of August (up to 5pm). The following requirements were given for this project:-

* Design a front-end interface using user interface principles for a data-driven web application.
* Semantic HTML should be used as appropriate.
* The site should have no Web Content Accessibility Guideline (WCAG) errors  
* The user interface should reasonably resemble planning wireframe/design models and have consistent styles and clear navigation. Changes to design ideas at implemented should be explained and documented.
* Consideration given to providing the users with feedback and information for the actions they take.
* Contain interactive elements like forms, buttons and modals.
* Be responsive to different device sizes and work apropriately in each.
* The site should engage in create, read, update and delete operations in full using a database from the front-end page itself.
* All database table/models should be consistent and make sense.
* At least one custom database model should be used and documented in full.
* An Agile methodology should be used to plan, design and implement the project.
* A project board should be used to plan and track the progression of the project.
* Custom PEP8 compliant Python code used to achieve significant functions within the application along with the templating provided by the chosen framework Django.
* Well-structured and idented code with consistent and meaningful variable and function names.
* Files stored in a consistent and descriptive manner following industry standards.
* At least one functional form with validation for creating and editing data.
* Forms editing data must be pre-filled with information.
* A functional role-based login system must be implemented. 
* Accurate display of the login status so that the user can easily tell if they are logged in or not.
* Security must be in place to ensure that users can only access authorised content for them.








* The main goal is the creation of an interactive front-end web application using HTML, CSS and JavaScript.
* The site should meet the purpose it was designed for.
* Navigation from page to page should be clear and obvious to the user.
* Any CSS animations used should not be overwhelming.
* Appropriate feedback should be given to user actions.
* The site must work responsively on all screen sizes, including mobile, tablet and desktop.
* Error handling should be implemented as required. This also includes ensuring that the site does not break if the user behaves unexpectedly.
* All images should have the correct aspect ratio and be of an appropriate size.
* The HTML, CSS and JavaScript code should pass W3C and JSHint validation.

* No commented-out code should be left in the project by the end.
* The project should be fully documented in a Markdown format (as in this document).
* Full credits should be given for all material used from external sources. This includes frameworks, code and images etc.
* All code should be appropriately commented.
* A standard file/folder convention should be used to store all content.
* File and variable names should be appropriately chosen according to their function.
* The site should be fully tested to ensure everything works as expected.
* There should be no console errors found in the browser developer tools.
* The project should be managed using a project board.
* The game should be as accessible as possible. This involves the following steps:-
    * Making sure colour contrast is clearly well-defined throughout the site.
    * Ensuring all images have an appropriate alt tag.