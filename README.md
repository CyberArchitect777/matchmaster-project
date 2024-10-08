#  Match Master
## By Barrie Millar
### A Themed Memory Card Matching Game

## Table of Contents

1. [Introduction](#introduction)
2. [Project Goals](#goals)
3. [Agile: Project Planning](#agile)
4. [Project Design](#design)
5. [Instructions and Features](#instructions)
6. [Testing](#project-testing)
7. [Outcomes / Future Development](#outcomes)
8. [Known Issues](#known-issues)
9. [Project Deployment](#deployment)
10. [Technical Facts](#technical-facts)
11. [Locations: Deployment, Repository, Project Board](#locations)
12. [Credits](#credits)

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

With the user stories completed, a decision had to be made on how the project would be managed. It was decided that a GitHub project board would be used to develop the project. Four sections were opened on the board. These were as follows: 

- Backlog - To store any user stories not completed. This is inevitable given the scale of the project and the resources available. 
- Todo - Things that should be done in this iteration
- In Progress - Things that are currently being worked on.
- Done - Things that have been completed.

The next stage was to map the user stories onto the project board. The links to both the board and the user stories can be seen below.

[GitHub Project Board](https://github.com/users/CyberArchitect777/projects/10)

User stories: 

In keeping with the MoSCoW prioritsation, the user story was given priorities on the board. Must-do stories were assigned a priority of P0 and can be found below.

[Play the game](https://github.com/CyberArchitect777/matchmaster-project/issues/2)

[Access documentation](https://github.com/CyberArchitect777/matchmaster-project/issues/3)

[Contact site creator](https://github.com/CyberArchitect777/matchmaster-project/issues/4)

[Play on multiple devices](https://github.com/CyberArchitect777/matchmaster-project/issues/5)

[Game user account management](https://github.com/CyberArchitect777/matchmaster-project/issues/6)

[Change account details](https://github.com/CyberArchitect777/matchmaster-project/issues/11)

[Gameplay interactions are immediately responsive](https://github.com/CyberArchitect777/matchmaster-project/issues/12)

[Reset password](https://github.com/CyberArchitect777/matchmaster-project/issues/13)

[Delete game record](https://github.com/CyberArchitect777/matchmaster-project/issues/18)

Should-do stories were assigned a priority of P1:

[Change game difficulty level](https://github.com/CyberArchitect777/matchmaster-project/issues/7)

[View leaderboard](https://github.com/CyberArchitect777/matchmaster-project/issues/10)

Could-do stories were assigned a priority of P2:

[Change content of hidden and visible cards](https://github.com/CyberArchitect777/matchmaster-project/issues/8)

[Change background image and site colour scheme](https://github.com/CyberArchitect777/matchmaster-project/issues/9)

[Sound effects](https://github.com/CyberArchitect777/matchmaster-project/issues/14)

[Music](https://github.com/CyberArchitect777/matchmaster-project/issues/15)

[User profile avatar](https://github.com/CyberArchitect777/matchmaster-project/issues/16)

[Change game modes](https://github.com/CyberArchitect777/matchmaster-project/issues/17)

Won't-do stories were not added to the board as there is no plan to implement them for the foreseeable future.

All the links to the user stories above contain titles, user stories and acceptance criteria. A significant number of other "Checklist" items were also added to the project board as steps that needed to be achieved to reach the required standard for the project criteria. With the board set up, it was now possible to begin designing. 

<a id="design"></a>
## Project Design

Some initial consideration was given to the name of the project. Eventually, a decision was made to go with "Match Master" which flows nicely and has a symbolic refernce to matching and also being good at something. It was decided early on that this would be a themed project to make the game more visually focused and stylish. An interface flow diagram was then created to try and picture how the site would work in practice. This is shown below:-

![Interface flow diagram](/docs/interface-flow-diagram/user-interface-flow.png "Interface flow diagram")

### Interface design

After past experiences using abstract wireframe models and seeing the effects of a graphical design tool in a previous hackathon, it was decided that a more detailed design process would be utilised on this occasion. Canva was the site of choice for this and several models of how the site may look were designed. This is shown in the next section.

A sketch of the front page was created and can be seen below. It looks very much like the site as it was finally created.

![Front page on desktop when signed out](/docs/canva-design/desktop-front-out.png "Front page on desktop when signed out")

The design carried an attractive front-end splash screen with a green themed interface. A standard nav bar can be found at the top and a descriptive footer at the bottom. A sketch of the page while signed in is much the same, although the nav bar looked different. 

![Front page on desktop when signed in](/docs/canva-design/desktop-front-in.png "Front page on desktop when signed in")

A mockup of a mobile phone version was also created at a minimum 320x576 size. It can be seen that the mobile version looks like a smaller version of the desktop. However, the hidden nav bar means that it was necessary to demonstrate more clearly what the user account status was. This was designed in for this version.

![Front page on mobile when signed out](/docs/canva-design/mobile-front-out.png "Front page on mobile when signed out")

Two designs from Canva are shown below depicting the login screen on desktop and on mobile. These are also quite similiar to the actual implementation ultimately, although there are slight differences. 

![Login page on mobile when signed out](/docs/canva-design/mobile-login-out.png "Login page on mobile when signed out")
![Login page on desktop when signed out](/docs/canva-design/desktop-login-out.png "Login page on desktop when signed out")

The next design shows how the game was envisied at the start. The plan was to eliminate all other elements from the screen and free up as much space as possible for the game cards. It was thought at the time that space might be a big problem on smaller devices for the game, although this turned out to be less of an issue than expected.

![Game page on desktop when signed in](/docs/canva-design/desktop-game-in.png "Game page on desktop when signed in")

The profile page on desktop was clearly going to be a more crowded space with all the components that needed to go into it, so the design originally showed a three column display on large screens. In hindsight, the difficulty panels should have been combined with a carousel component to create a scrolling pane, but this seemed to work fine given the space available. 

![Profile page on desktop when signed in](/docs/canva-design/desktop-profile-in.png "Profile page on desktop when signed in")

On mobile, there is less space available. It was envisaged therefore that pages would have a scrolling design to fit all the content in. The two screenshots below show the page as it is scrolled on mobile.

![First profile page on mobile when signed in](/docs/canva-design/mobile-profile-in-p1.png "First profile page on mobile when signed in")
![Second profile page on mobile when signed in](/docs/canva-design/mobile-profile-in-p2.png "Second profile page on mobile when signed in")

Finally, the mockup designs of the register and instruction pages are shown, desktop only this time. The site theme and layout were quite consistent from page to page in general, colourful, but also embodying the idea of consistency and functionality found in modern web applications

![Register page on desktop when signed out](/docs/canva-design/desktop-register-out.png "Register page on desktop when signed out")
![Instructions page on desktop when signed out](/docs/canva-design/desktop-instructions-out.png "Instructions page on desktop when signed out")

### Database Design

As a full-stack data-driven web application, a database was required to store data from session to session. For this project, a PostgrlSQL database server was used as provided by Code Institute. Using the Django framework, the first step was to create some models to store data. After some thought, the following design decisions were made as can be seen from this early entity relationship diagram. 

![Early entity relationship diagram](/docs/erd/early-erd.png "Early entity relationship diagram")

The AutoField entries in each table are auto-generated by Django and are primary keys. The User model is a Django default table and the use of it was planned for authentication and also updating functions such as username, password and email. However, due to some confusion over the project criteria, it was later determined that update operations must take place on a custom model. For this reason, a re-think on the project scope was required, leading to a new design. The final one used is shown below. 

![Final entity relationship diagram](/docs/erd/later-erd.png "Later entity relationship diagram")

The default User model in Django was still used for authentication and updates to the username, password and email were still included as per the original planning ideas. However, the project criteria required create, read, update and delete operations on a custom model and thus a new model was required. The instructions page of the project was thus turned in a superuser editable page via the new Information table. The other models look similar to the original design with only a minor change to the Message model. It was decided that a new field should be added to keep track of the date messages were sent. 

#### Models

##### User model

The user model as stated previously is a Django default model and is used for authentication for the most part. There is also user support for editing the username, email and password, the first two by custom design in this project and the third by the AllAuth Django module.

##### Game model

This is the main model that stores game results. It is linked to the User model to store the player who plays each game and also to the GameType model to store the type of game that was being played.

##### GameType model

This small table presently only stores the amount of boxes in each game, effectively a difficulty setting. It would also likely store a game type setting if different game modes were implemented. By the end of the project however, it became clear that implementing new game modes and difficulty levels (could-do and should-do) tasks was unachievable in the time available. For this reason, it would have been possible to delete this model and store the total boxes in the Game model. However, this would have limited expansion room in the game and additionally led to a re-design if the difficulty should-do tasks had been completed. Therefore, it makes sense to have this small table for future expansion. 

##### Information model

This model stores all information displayed on the Instructions page apart from the Contact Admin form. This is the only model in the project that supports full create-read-update and delete functionality via the front-end. It is accessible by superuser only for create, update and delete operations. The non-privileged user is then allowed to read the instructions, even if not logged in. The "active" field is in place to allow the superuser to remove the content from the instruction page without deleting it. The "priority" field allows the superuser to sort the posts into an order they want.

##### Message models

The Messages model stores messages that are sent by the user for admin review. The field names are fairly self-explanatory so little explanation is needed. 

#### Field types

An attempt was made to make reasonable decisions regarding field names. Most of them are straightforward choices and require no extensive consideration. The character field lengths were largely set to sensible limits or were based on the User model defaults. So the Message.sender_name field for instance is 300 characters for a full name. The User model has a first and surname of 150 characters each and thus a figure of 300 was reached for the combined name. 

#### Model relationships

Although the Entity-Relationship-Diagram charts show the relations graphically, the following details textually what they are. 

One User plays many Games
One GameType appears in many Games
One User can create/edit much Information

#### CRUD (Create, Read, Update, Delete) functionality

The realities of the project means that not all models have full CRUD functionality. The exact operations possible on each model is shown below.

User: CRUD (Most via AllAuth, update manually too)
Game: CRD
Information: CRUD (All custom)
Message: C

<a id="instructions"></a>
## Instructions and Features

After all the design process was finished, the site was implemented over a number of days. The aim was to match the design templates as close as possible, although it was clear that unforeseen issues would mean that some changes would inevitably need to be made. This section will detail the site features while providing instructions on how to use it. Some pages on the site are accessible to non-logged in users while others require a login. The following information details this further:-

- Screens requiring a login: Index, profile, game, change password, logout
- Screens requiring a login as superuser on the front-end to be fully usable: instructions
- Screens not requiring a login: Index, instructions, login, register, 

Match Master is fully responsive and it can be used from a minimum size of 320x576 all the way up to a 4K display. For the purposes of this document, we will cover responsiveness for a few screenshots and then focus on a desktop view when explaining the features and the site for brevity. The first two screenshots show the page in both mobile and desktop view. It looks very similiar to the interface design produced in Canva and works similiarly. One difference is that a green bar was added underneath the navbar to see the current user status. It was felt that it wasn't always clear if the user was logged in or not and so a more obvious approach was taken. The text on the footer was also shortened too, as the original was proving difficult to fit in on mobile view.

In mobile view, the navbar is a dropdown menu while it appears persistently on desktop. The same items are displayed though and it is designed as the main means of navigation around the site. This set of screenshots show a user logged in and so "Start Game" is displayed at the bottom. If the user wasn't logged in, "Log In" would be shown instead and it would lead the user to the login page instead of to the game.

![Desktop index page screenshot when signed in](/docs/screenshots/desktop-front-in.png "Desktop index page screenshot when signed in")
![Mobile index page screenshot when signed in](/docs/screenshots/mobile-front-in.png "Mobile index page screenshot when signed in")

The next screenshots show the game view in both mobile and desktop mode. The game boxes are fully responsive and re-position themselves even if the browser width is changed live. As you can see, the game looks and plays the same in both screen modes. The game is accessible via the "Start Game" button on the index page or the same one on the profile page. The game is played by clicking on two boxes to try and find matching pairs. If you succeed in finding a match, they will remain face-up and the game will wait for you to click more. If the two cards you pick are not a match, they will remain a second before flipping back over. The game continues until all matches have been made by which time you are shown your final score and asked to "End Game". You can restart the game at any time by clicking on the "Restart Game" button while the game is in progress. The live number of rounds played as well as the number of pairs left is shown in the bottom panel too.

![Desktop game page screenshot when signed in](/docs/screenshots/desktop-game-in.png "Desktop game page screenshot when signed in")
![Mobile game page screenshot when signed in](/docs/screenshots/mobile-game-in.png "Mobile game page screenshot when signed in")

The profile screen is shown next with both mobile and desktop views. This screen is a bit larger though and thus it required three mobile screenshots to show it all. This page shows the profile of the currently shown user followed by two buttons to start a new game or delete your game history. The delete history button requires a further confirmation to ensure no accidental mistakes leads to a loss of long-term game history. Below these buttons, the statistics from the users historical record is shown as well as forms to change their username or email adddress. The password can also be changed by clicking on the button at the bottom.

![Desktop profile page screenshot when signed in](/docs/screenshots/desktop-profile-in.png "Desktop profile page screenshot when signed in")
![Mobile profile page screenshot when signed in (page 1)](/docs/screenshots/mobile-profile-in-p1.png "Mobile profile page screenshot when signed in (page 1)")
![Mobile profile page screenshot when signed in (page 2)](/docs/screenshots/mobile-profile-in-p2.png "Mobile profile page screenshot when signed in (page 2)")
![Mobile profile page screenshot when signed in (page 3)](/docs/screenshots/mobile-profile-in-p3.png "Mobile profile page screenshot when signed in (page 3)")

From this point on, the focus will be on the feature set of the site so only one set of screenshots will be provided. The instruction page is the next one to be demonstrated. This can be seen with two views, one when logged in as a super-user and one at all other times. This is demonstrated in the following screenshots. 

![Desktop instruction page screenshot when signed in as a superuser](/docs/screenshots/desktop-instruction-in.png "Desktop instruction page screenshot when signed in as a superuser")
![Desktop instruction page screenshot in all other cases (page 1)](/docs/screenshots/desktop-instruction-out-p1.png "Desktop instruction page screenshot in all other cases (page 1)")
![Desktop instruction page screenshot in all other cases (page 2)](/docs/screenshots/desktop-instruction-out-p2.png "Desktop instruction page screenshot in all other cases (page 2)")

As can be seen in the first screenshot, when a superuser is signed in, small red buttons appear allowing that user to edit or delete instruction records. Pressing the "Edit" button as has been done in the same screenshot will copy the details down to the form below. After editing the details, the superuser can then press Update and the database will be updated with the new information. However, the next screenshot shows the same page where a superuser is not logged in. There are no red buttons on this page and the priority indication, which the superuser can use to set the order of records is missing. The admin form at the bottom to add or edit records is also missing. This page is therefore only fully functional for a superuser to create, edit and delete. A normal or anonymous visitor of the site will only see the instructions as shown. 

The third screenshot shows the last entry in the accordion, a form to send a message to the admin/site creator. This is accessible by all users, even those not logged in and can be used for a variety of reasons, including feedback, password reset requests, queries, etc, etc.

![Modal screenshot when signed in](/docs/screenshots/desktop-modal-in.png "Modal screenshot when signed in")

The screenshot above shows a modal that appears whenever a request to make a deletion is made. This happens in two ways on the site, deleting your game history or deleting an instruction element. Only by pressing yes will the deletion happen. 

The next image shows a central feature of the confirmation process on this website, that an alert message informs the user wherever a database create, update or delete takes place. In this example, the message shows that an instruction element was added. But the same messages appears for all updates on the Game, Information, Message and User models.

![Message screenshot when signed in](/docs/screenshots/desktop-message-in.png "Message screenshot when signed in")

Finally, the website uses the Python module AllAuth to provide user authentication, the ability to change passwords, login and register. All the sites provided by AllAuth have been styled in the theme of this website and are shown in screenshots below. 

![Desktop change password page screenshot when signed in](/docs/screenshots/desktop-change-password-in.png "Desktop change password page screenshot when signed in")
![Desktop login page screenshot when logged out](/docs/screenshots/desktop-login-out.png "Desktop login page screenshot when logged out")
![Desktop logout page screenshot when signed in](/docs/screenshots/desktop-logout-in.png "Desktop logout page screenshot when signed in")
![Desktop register page screenshot when logged out](/docs/screenshots/desktop-register-out.png "Desktop register page screenshot when logged out")

<a id="project-testing"></a>
## Project Testing

The following code tests were carried out:-

- W3C HTML validation
    - All pages have only warnings apart from those where code from AllAuth has been flagged. This is generated by this module and thus there is nothing that can be done from this end.
    - Pages signup.html and password-change.html known to be affected.
- W3C Jigsaw CSS validation
    - No errors or warnings
- JSHint validation
    - No errors or warnings
- CI Python Linter
    - No errors or warnings
- No Web Content Accessibility Guideline errors

The following manual test procedures were run to ensure the website ran as expected and find any outstanding bugs found:-

- (Pass) Full site responsive test to see if the site worked successfully down to a minimum of 320px by 576px.

AllAuth/Custom Authentication

- (Pass) Check to ensure that it is not possible to access secured areas while not authenticated
- (Pass) Check to make sure that it is not possible to access another user account data
- (Pass) Ensure that it is not possible to log in with invalid details
- (Pass) Attempted to create a new user over one who already exists and failed
- (Pass) Tried to create a valid user account through registration
- (Pass) Tried to log in with valid user details - Pass
- (Pass) Check if Django messages appear as you log in and out as well as register
- (Pass) Tried to log out of the account and succeeded
- (Pass, but AllAuth error message not obvious on first sight) Tried to change password by not matching passwords and failed
- (Pass, but AllAuth error message not obvious on first sight) Tried to change password with wrong current password but failed.
- (Pass) Changed password, logged out and then back in to see if it works successfully.

Index app

- (Pass) Check to see if the “Start Game” button works on the index page when user is logged in
- (Pass) Check to see if the “Log In” button works as expected on the index page when a user is not logged in

Instruction app

- (Pass) Ensured that a normal user cannot have superuser access on the instruction app
- (Pass) Tried to send a valid message to admin using legitimate details
- (Pass) Tried to complete the send to admin form without including a field and failed
- (Pass) Tried entering a non-email for the send to admin form, submitting and failing validation
- (Pass) Tested the accordion functionality and found it working perfectly with database data
- (Pass) Tried to send an admin message without filling in one field and failed
- (Pass) Attempted to add a new instruction record as a superuser
- (Pass) Attempted to remove a instruction record as a superuser
- (Pass) Attempted to edit a instruction record as a superuser
- (Pass) Re-prioritised an instruction record and the list order of information should change successfully.
- (Pass) Set active to hide on a instruction record to see if it disappears from display (non-super-user display only)
- (Pass) Make sure that hidden instruction records still appear to superusers.
- (Pass) Test if superusers can set instruction records to show and hide for non-superusers

Playerprofile app

- (Pass) Tested to see if a new game record is created after a game is played
- (Pass) Tried to change the username with the wrong password and failed
- (Pass) Tried to change a username to the same one and failed
- (Pass) Tried to change a username without having a matching username and failed
- (Pass) Tried to change email correctly and succeeded
- (Pass) Tried to change email to the same one I already had and failed
- (Pass) Tried to use the wrong password to change the email and failed
- (Pass) Tried to change non matching email, failed

Memorygame app

- (Pass) Tried to open more than two boxes at a game in the game and failed
- (Pass, boxes opened but quickly reset) Tried to restart the game and open boxes while it reset to sabotage the game.
- (Pass) Tried resetting the game record 

<a id="outcomes"></a>
## Outcomes / Future Development

Ultimately, the final project at the end of this iteration resulted in all of the must-do items being implemented, but none of the should or could-do items. Despite a strong attempt to stick to what was considered a minimum viable product, the pressure to finish all the must-do items meant too much scope was still placed on this iteration. One potential mistake made on this project was not to seek further clarification on some project criteria earlier on, leading to a change of circumstances later on. However, despite the challenges, the minimum viable product, all of the must-do items were ultimately completed.

This was the final outcome:-

- As a user, I want to play the game for entertainment/memory training
    - As a user, I was able to play the game for entertainment and memory training as much as I wanted. 
- As a user, I want to see instructions to determine how to play
    - As a user, I was able to see instructions if I was logged in or not and understand how to play the game. 
- As a user, I want to contact the site creator to offer suggestions, provide feedback and raise queries.
    - As a user, I was able to contact the site creator from the instruction page near the bottom of the page.
- As a user, I’d like to play the game on whatever device I have
    - As a user, I was able to play this game on any device bigger than the minimum of 320x576, pretty much any JavaScript capable device in this era.
- As a user, I’d like to have an account so that my games are tracked over time and I can see my progress.
    - As a user, I was able to see my games being recorded and my statistics being tracked over time. I was able to view the statistics from the profile page.
- As a user, I’d like to be able to change my account details.
    - As a user, I was able to change my username, email and password settings on the website.
- As a user, I’d like the gameplay to be immediately responsive to my actions so I have an enjoyable playing experience.
    - As a user, I found the game was very responsive and I received immediate feedback from my actions.
- As a user, I’d like to be able to reset my password if I can’t remember what it is.
    - As a user, I am able to contact the site owner and request a password reset. The site made it clear that having an email on the site records was wise for this purpose.
- As a user, I’d like to clear my game record so I can start again as a new player.
    - As a user, I was able to clear my game record at any time.

There are numerous areas of possible future development that could be considered. However, based on the Agile methodology, it is clear that the next tasks that should be undertaken in the next iteration is the should-do tasks. These are listed below. 

- Allow the user to change the game difficulty level
- Implement a leaderboard system

Beyond this, the could-do items are also possibilities:-

- Change content of hidden and visible cards
- Change background image and site colour scheme
- Add sound effects
- Music
- Allow the user to have a profile avatar, perhaps in combination with the leaderboard.
- Add alternative game modes.

All the tasks not completed in this iteration have been placed in the backlog to be started on the next run. 

<a id="known-issues"></a>
## Known Issues



<a id="deployment"></a>
## Project Deployment

Match Master was deployed to Heroku as a project early on in the development. The following information is what I used to achieve this. 

Setting up a fresh project

- pip3 install django
- django-admin startproject matchmaster .
- python3 manage.py startapp index
- python3 manage.py runserver
- Make sure the local environment is added to ALLOWED_HOST in settings.py
- Check the project works

Setting up the index page

- Add to the urls.py codebase in the project directory before doing the same with views.py
- A basic message should be displayed on your local environment.

Deploy to Heroku

- Create a new project on Heroku. After that, go to the settings tab and reveal config vars. Add a key of DISABLE_COLLECTSTATIC and a value of 1 before clicking Add.

In GitPod

- pip3 install gunicorn
- pip3 freeze --local > requirements.txt
- echo "web: gunicorn matchmaster.wsgi" > Procfile
- Set DEBUG to False in settings.py and also add ’.herokuapp.com’ to ALLOWED_HOSTS
- Commit and push to GitHub

In Heroku
- Go to the Deploy tab for this created project.
- In the deployment method, select GitHub
- Find the matchmaster repository and select it.
- Deploy branch to start a manual deployment of the main branch.
- Click on open app to view the deployed project.
- Open resources and choose an eco dyno, a lightweight container.
- Verify that there is no existing Postgres database add-on. If there is one, you can destroy it, otherwise the costs can be significant.

Local environment

- Set DEBUG to True
- env.py: Fill out the file to set an environment variable called DATABASE_URL to the database that is being used. 
- Add env.py to .gitignore
- pip3 install dj-database-url psycopg2
- pip3 freeze --local > requirements.txt
- Import the following code into matchmaster/settings.py: 

import os
import dj_database_url
if os.path.isfile('env.py'):
	import env

- Set up the database link in settings.py to read from env.py locally or from the DATABASE_URL environment variable on Heroku
- Run python3 manage.py migrate
- python3 manage.py createsuperuser # Choose a username, email and password for super user access to Django
- Git commit and push again and re-deploy the project on Heroku

Heroku

- Finally make sure again that there are no database addons on Heroku and that the DATABASE_URL has been set correctly.

Final steps

- DEBUG should be off on deployment, or a method found to automatically switch it off as it has been done in this project.
- No secret information nominally found in env.py or environment variables should be exposed onto public respositories or websites.

<a id="technical-facts"></a>
## Technical Facts

Technologies used:

- HTML
- CSS
- Bootstrap
- JavaScript
- Python
- Django

Python/Django libraries used (directly loaded):

- Cloudinary
- Crispy-bootstrap5
- Dj-database-url
- Django-allauth
- Django-crispy-forms
- Gunicorn
- Psycopg
- Whitenoise

Tools

- Slack (for communications)
- Canva (for wireframing, design and images)
- SmartDraw (for entity-relationship mapping)
- Diagram.net (for entity-relationship mapping, interface flow chart)
- Google Documents (for project planning)
- GitHub Projects (for project management)
- ChatGPT (mainly for code technique advice)
- Websites Online, like Stack Overflow and Django's online documentation (for code advice/reference)

<a id="locations"></a>
## Locations: Deployment, Repository, Project Board

- GitHub repository - https://github.com/CyberArchitect777/matchmaster-project
- GitHub project board - https://github.com/users/CyberArchitect777/projects/10
- GitHub deployed website - https://matchmaster-project-18732b4416f9.herokuapp.com/

<a id="credits"></a>
## Credits

- Canva for all image resources used in creating the website
- Tutors and fellow students who are part of this bootcamp programme.

Photo
- Photo by <a href="https://unsplash.com/@nampoh?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Maxim Hopman</a> on <a href="https://unsplash.com/photos/people-playing-soccer-on-green-field-during-daytime-xyDkHkvDYp4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
