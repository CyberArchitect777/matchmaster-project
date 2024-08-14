#  Match Master
## By Barrie Millar
### A Themed Memory Card Matching Game

# Table of Contents

1. [Introduction](#introduction)
2. [Project Goals](#goals)
3. [Agile: Project Planning](#agile)
4. [Project Design](#design)
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

### Planning/Design/Documentation

* An Agile methodology should be used to plan, design and implement the project.
* The project should be fully documented in a Markdown format (as in this document).
* A project board should be used to plan and track the progression of the project.
* The user interface should reasonably resemble planning wireframe/design models and have consistent styles and clear navigation. Changes to design ideas at implemented should be explained and documented.
* The site should meet the purpose it was designed for.
* Full credits should be given for all material used from external sources. This includes frameworks, code and images etc.

### Front-End

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

### Back-End

* All database table/models should be consistent and make sense.
* At least one custom database model should be used and documented in full.
* Custom PEP8 compliant Python code used to achieve significant functions within the application along with the templating provided by the chosen framework Django.
* A functional role-based login system must be implemented. 
* Security must be in place to ensure that users can only access authorised content for them.

### Full-Stack

* Consideration given to providing the users with feedback and information for the actions they take.
* The site should engage in create, read, update and delete operations in full using a database from the front-end page itself.
* Well-structured and idented code with consistent and meaningful variable and function names.
* Files and folders should be used in a consistent and descriptive manner following industry standards.
* At least one functional form with validation for creating and editing data.
* No commented-out code should be left in the project by the end.
* All code should be appropriately commented.

### Version Control

* Effective use of a version control system and an appropriate use of commit messages shown.

### Testing

* Manual or automatic testing must be done to assess the entire site functionality, usability, responsiveness and data management with extensive documentation.

### Outcome

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

<a id="agile"></a>
## Agile: Project Planning

With the project idea and goal known, the next stage was to plan and decide how it was going to be put together. An Agile methodology was used to implement this stage. Using Agile, the first stage was to identify what features might be useful for users in our project domain. To achieve this, a number of User Stories were considered and drafted. These are listed below. 

### User Stories

- As a user, I want to play the memory game for entertainment/memory training
- As a user, I want to see instructions to see how to play
- As a user, I want to contact the site creator to offer suggestions and provide feedback
- As a user, I’d like to play the game on whatever device I have
- As a user, I’d like to see my games tracked over time so I can see my progress.
- As a user, I’d like to change the difficulty level to provide more or less challenge.
- As a user, I’d like to change the content of the hidden and visible cards so that I can play using my preferred theme.
- As a user, I’d like to change the background image as well as the site colour scheme to fit in with my customised card choices
- As a player, I’d like to see a leaderboard so I can see my progress against others
- As a user, I’d like my player profile to be saved so my game progress can continue over time.
- As a user, I’d like to be able to change my authentication details
- As a user, I’d like the game to load quickly and run smoothly so I have an enjoyable playing experience
- As a user, I’d like to log in to play the game without having to commit to signing up.
- As a user, I’d like to be able to reset my password if I can’t remember what it is. 

### Acceptance Criteria

Once these user stories had been considered, it was necessary to narrow down the acceptance criteria that would be used to judge if these were ultimately furfilled. Based on this, the following acceptance criteria was assigned to each user story.

- As a user, I want to play the memory game for entertainment/memory training
    - A functional memory game should be provided in the usual style, where two cards are progressively flipped until all hidden pairs have been matched
    - Feedback has been given to the user as to the result for this particular game.
    - Live scoring is visible to the user as the game progresses.
    - The ability to restart the game at any time has been provided.
- As a user, I want to see instructions to see how to play
    - Documentation is provided on how to play the actual game.
    - A guide on the use of the full website is found on the same page.
- As a user, I want to contact the site creator to offer suggestions and provide feedback
    - A means of contacting the creator should be provided and available to the user
- As a user, I’d like to play the game on whatever device I have
    - The user is able to use the game and website on devices of varying sizes, ranging from mobiles to desktops and it remains similarly functional.
- As a user, I’d like to see my games tracked over time so I can see my progress.
    - A facility has been provided showing the user their game progress over time at differing skill levels. At a minimum, this would include games played as well as least rounds taken to win, average rounds and most rounds.
- As a user, I’d like to change the difficulty level to provide more or less challenge.
    - An ability to scalable the difficulty of the game has been provided to the user using an alteration of the total number of boxes.
    - Users should be able to select between at least three difficulty levels.
- As a user, I’d like to change the content of the hidden and visible cards so that I can play using my preferred theme.
    - The user is able to change the hidden cards as well as all the visible ones.
    - The change affects only the player logged in and not all others.
- As a user, I’d like to change the background image as well as the site colour scheme to fit in with my customised card choices
    - The user is able to change the background and font colour of the header and footer bars.
    - The background wallpaper can be changed.
    - The change affects only the player logged in and not all others.
- As a player, I’d like to see a leaderboard so I can see my progress against others
    - A score board has been provided showing a multiplayer leaderboard at certain difficulty levels and game modes if implemented.
- As a user, I’d like my player profile to be saved so my game progress can continue over time.
    - The game record of all completed games is saved to the database and the user is able to visually see aggregated statistics of past games.
- As a user, I’d like to be able to change my authentication details
    - The user is able to change their username via their profile page
    - The user is able to change their password via their profile page
    - The user is able to change their recorded email address via their profile page
- As a user, I’d like the game to load quickly and run smoothly so I have an enjoyable playing experience
    - A suitable smooth front-end has been provided which has a minimal degree of delay in site functionality that is not caused by external and uncontrollable factors (i.e hosting or database provider issues)
- As a user, I’d like to log in to play the game without having to commit to signing up.
    - Ensure the game can be played without any login. No game recording should then take place and no statistics should be provided.
- As a user, I’d like to be able to reset my password if I can’t remember what it is. 
    - A manner of recovering an account is in place to allow the user to do this if a password is lost.

### MoSCoW Prioritisation

Although it seems that the user story and acceptance criteria process was fairly simple, it took quite a lot of time to come up with these stories and acceptance criteria as some imagination and consideration had to be put into the process. Once these full user stories were complete, it was necessary to apply some prioritisation to the order in which they would be implemented. It was always unrealistic to expect that all of these stories could be implemented in the short time available. For this reason, the goal was to produce a minimum viable product and then move on from there.

Based on this thinking, a prioritisation list was drawn up. The criteria in selecting the importance of these features was the resources required to produce the feature, the benefit the user would gain from it and steps it would take in achieving the criteria of this project. The following determination was made using the MoSCoW technique. 

Must Have: 

- As a user, I want to play the game for entertainment/memory training
    - This was a clear must-do, the essence of the project depends on it.
- As a user, I want to see instructions to determine how to play
    - Documentation is a clear need in learning how to become involved in the site and thus the priority of it was clear
- As a user, I want to contact the site creator to offer suggestions, provide feedback and raise queries.
    - A must-do, particularly because password resets are likely to be needed. An email password reset system is the industry standard for this but requires an email server and thus is probably beyond the scope of the project. This is particularly the case due to the current small size of the project. 
- As a user, I’d like to play the game on whatever device I have
    - This is a must-do as it is a project requirement and also important for user support on any device they may choose to use.
- As a user, I’d like to have an account so that my games are tracked over time and I can see my progress.
    - This is a must-do as it is essential to the project goal of maintaining a user record over time.
- As a user, I’d like to be able to change my account details.
    - A must-do as changing user details is likely to be important in the long-term use of the site.
- As a user, I’d like the gameplay to be immediately responsive to my actions so I have an enjoyable playing experience.
    - A poor playing experience would make the project ineffective immediately and thus this is a must-do
- As a user, I’d like to be able to reset my password if I can’t remember what it is.
    - This is a must-do, although it is technically difficult given the unavailability of an email server. Contacting the site owner and asking for a password reset should be possible though given the small scale of the site at this time.
- As a user, I’d like to clear my game record so I can start again as a new player.
    - It is reasonable that players might want to clear their gaming records at any time and thus this is a must-do.

Should do:
- As a user, I’d like to change the difficulty level to provide more or less challenge.
    - This feature would provide additional benefit to user engagement on the project. However, it is not critical to the initial success and thus is a should-do. 
- As a user, I’d like to see a leaderboard so I can see my progress against others.
    - Similiar to the previous point, a leaderboard would drive engagement with the platform. However, it is not a core element of the project at this early stage and thus is a should-do. 

Could do:
- As a user, I’d like to change the content of the hidden and visible cards so that I can play using my preferred theme.
    - This might drive engagement in the project and make it more appealing to a wider audience. However, it is not important to the cognitive challenge portion of the problem statement and not a core functionality either so it is only a could-do.
- As a user, I’d like to change the background image as well as the site colour scheme to fit in with my customised card choices.
    - This is very similiar to the previous point and thus has the same classification. The previous feature should be implemented before this one if could-do user stories are implemented.
- As a user, I’d like to be immersed in the game with the aid of sound effects.
    - This would aid immersion in the game, but has no core benefits. It is only a could-do therefore. 
- As a user, I’d like to be immersed in the game with the aid of background music.
    - Similiar to the previous point and the same outcome. 
- As a user, I’d like to personalise my profile page with a graphical avatar.
    - This might be an interesting story if a time was reached where a leaderboard was available and public profiles were displayed. For now though, it is only a could-do. 
- As a user, I’d like to try variations on the standard game modes.
    - This might drive user engagement and is an interesting concept. However, it is not a core functionality and is a niche idea, thus it is only a could-do. 

Won't do: 

- As a user, I’d like to play the game without having to commit to signing up.
    - It is reasonable to assume that a lot of players might want to play the game without setting up an account. However, this would go against the project goal and thus won't be implemented. 
- As a user, I’d like to share my results on social media with others.
    - This might be a useful feature to implement if the site is in a more mature state. Given the requirements of third-party interfaces to social media platforms, it is clear that it is not a core feature and not something that would be considered for some time.
- As a user, I’d like to receive achievements for completing certain tasks.
    - As a means of achievement, this could be useful in driving retention of players over the long-term. However, it does not bring anything to the game itself that would encourage people to keep playing. For this reason, this is a secondary consideration and clearly would not be looked at for several iterations. It is therefore a won't do on this project for the foreseeable future.

### Project Management

With the user stories completed, a decision had to be made on how the project would be managed. It was decided that a GitHub project board would be used to develop the project. Thus, the first stage was to map the user stories onto the project board. The links to both the board and the user stories can be seen below.

[GitHub Project Board]

User stories: 

In keeping with the MoSCoW prioritsation, the user story was given priorities on the board. Must-do stories were assigned a priority of P0 and can be found below.

Play the game: https://github.com/CyberArchitect777/matchmaster-project/issues/2
Access documentation: https://github.com/CyberArchitect777/matchmaster-project/issues/3
Contact site creator: https://github.com/CyberArchitect777/matchmaster-project/issues/4
Play on multiple devices: https://github.com/CyberArchitect777/matchmaster-project/issues/5
Game user account management: https://github.com/CyberArchitect777/matchmaster-project/issues/6
Change account details: https://github.com/CyberArchitect777/matchmaster-project/issues/11
Gameplay interactions are immediately responsive: https://github.com/CyberArchitect777/matchmaster-project/issues/12
Reset password: https://github.com/CyberArchitect777/matchmaster-project/issues/13
Delete game record: https://github.com/CyberArchitect777/matchmaster-project/issues/18

Should-do stories were assigned a priority of P1:

Change game difficulty level: https://github.com/CyberArchitect777/matchmaster-project/issues/7
View leaderboard: https://github.com/CyberArchitect777/matchmaster-project/issues/10

Could-do stories were assigned a priority of P2:

Change content of hidden and visible cards: https://github.com/CyberArchitect777/matchmaster-project/issues/8
Change background image and site colour scheme: https://github.com/CyberArchitect777/matchmaster-project/issues/9
Sound effects: https://github.com/CyberArchitect777/matchmaster-project/issues/14
Music: https://github.com/CyberArchitect777/matchmaster-project/issues/15
User profile avatar: https://github.com/CyberArchitect777/matchmaster-project/issues/16
Change game modes: https://github.com/CyberArchitect777/matchmaster-project/issues/17

Won't-do stories were not added to the board as there is no plan to implement them for the foreseeable future.

All the links to the user stories above contain titles, user stories and acceptance criteria. A significant number of other "Checklist" items were also added to the project board as steps that needed to be achieved to reach the required standard for the project criteria. With the board set up, it was now possible to begin designing. 

<a id="design"></a>
## Project Design



