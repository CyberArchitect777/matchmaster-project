#  Match Master
## By Barrie Millar
### A Themed Memory Card Matching Game

# Table of Contents

1. [Introduction](#introduction)
2. [Project Goals](#goals)
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

This website was created as part of the final project of the "16-Week High-Performance Full Stack Skills Bootcamp" which officially ranged from the 31st of July, 2024 until the 14th of August (up to 5pm). The following requirements were given for this project:-

Planning/Design/Documentation

* An Agile methodology should be used to plan, design and implement the project.
* The project should be fully documented in a Markdown format (as in this document).
* A project board should be used to plan and track the progression of the project.
* The user interface should reasonably resemble planning wireframe/design models and have consistent styles and clear navigation. Changes to design ideas at implemented should be explained and documented.
* The site should meet the purpose it was designed for.
* Full credits should be given for all material used from external sources. This includes frameworks, code and images etc.

Front-End

* To design a front-end interface using user interface principles for a data-driven web application.
* Semantic HTML should be used as appropriate.
* The site should have no Web Content Accessibility Guideline (WCAG) errors  
* Contain interactive elements like forms, buttons and modals.
* Be responsive to different device sizes and work apropriately in each.
* Forms editing data must be pre-filled with information.
* Accurate display of the login status so that the user can easily tell if they are logged in or not.
* All images should have the correct aspect ratio, appropriate size and contain alt tags.
* The HTML, CSS and JavaScript code should pass W3C and JSHint validation.
* There should be no console errors found in the browser developer tools.
* An appropriate consideration should be given to ensure that the website meets accessibility as much as possible.

Back-End

* All database table/models should be consistent and make sense.
* At least one custom database model should be used and documented in full.
* Custom PEP8 compliant Python code used to achieve significant functions within the application along with the templating provided by the chosen framework Django.
* A functional role-based login system must be implemented. 
* Security must be in place to ensure that users can only access authorised content for them.

Full-Stack

* Consideration given to providing the users with feedback and information for the actions they take.
* The site should engage in create, read, update and delete operations in full using a database from the front-end page itself.
* Well-structured and idented code with consistent and meaningful variable and function names.
* Files and folders should be used in a consistent and descriptive manner following industry standards.
* At least one functional form with validation for creating and editing data.
* No commented-out code should be left in the project by the end.
* All code should be appropriately commented.

Version Control

* Effective use of a version control system and an appropriate use of commit messages shown.

Testing

* Manual or automatic testing must be done to assess the entire site functionality, usability, responsiveness and data management with extensive documentation.

Outcome

* Success deployment of project to a cloud platform with full documentation
* Ensure that all code committed is free from any sensitive information and all deployments/repositories are secure.

<a id="goals"></a>
## Project Goals

### Problem statement

There has been an increasing focus on two areas of mental wellbeing over the last few years. The first of these and most serious relates to cognitive decline and the rising scale of dementia related conditions at this point in history. The second relates to the increasing levels of concern surrounding our present exposure to social media and smartphones and an ever less focused lifestyle where distractions are constant and focus time is much dimmished. However, it is also clear that technology is a part of our lives and that it is going to increase in importance moving forward. As an example of this, gaming has become a mainstream interest from an initially niche hobby and attracts millions of people. With this in mind, there has been an increasing interest in games targeting memory training, cognitive improvement and concentration. It is hoped that this project can provide some assistance in joining this effort to develop improvements in those who wish to use it.

### Project Purpose

This project will attempt to provide a cognitive training application with a combined ability to track long-term performance. Users will then be able to review their own progress over time as they work on their own goals. Given the timescale available for this project, it is clear that the resources available are limited. For this reason, it is expected that a base level website will be provided. From this platform, further development and improvements can be made to expand the design, scope and functionality.

### Target Audience

The target audience for this website are those who are looking to improve their intellectual performance and capability along with those who enjoy challenging gameplay. In addition, the ability to track results will appeal to those interested in charting how they may improve over time, on both an achievement basis and as a marker of progress.

