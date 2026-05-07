#  Match Master
## By Barrie Millar
### A Themed Memory Card Matching Game

## Introduction

This document is designed to cover the future maintenance of this repository. The original documentation for this project at the deadline can be found [here](https://github.com/CyberArchitect777/matchmaster-project/blob/main/README-MatchMaster.md).

## Repository/Project Maintenance

Match Master is a full stack project and thus depends on backend elements to remain functional. For this reason, future database or platform changes may require updates to keep it working. However, all changes made will be maintenance only and the project will not receive any functional changes to this repository. Any new endeavour changing this will appear in a new repository.

A tag and a branch have been created for this project with the label of v1.0 and release-v1.0 respectively. This is to mark the original project as submitted during the 16-Week High-Performance Full Stack Skills Bootcamp at Code Institute.

## Project Deployment Links

The links for this project can be found below:

* Main Heroku website deployment: (https://matchmaster-project-18732b4416f9.herokuapp.com/)
* Additional Azure website deployment: (https://match-master.azurewebsites.net)
* GitHub repository: (https://github.com/CyberArchitect777/matchmaster-project)

## Changes made

2026 developments

- The project now uses an SQLite database instead of the original PostgreSQL. This change was made because access to the original Code Institute database is expected to be withdrawn. SQLite is sufficient for development and portfolio demonstration purposes. However, the database is not persistent on the server, so it may periodically reset to the default demo data when the web server restarts.
- An additional Azure web deployment has been created and the hyperlink to it can be found further down. Heroku will remain the primary live site for now though.

Previous developments

- Added new maintenance documentation in README.md to explain future updates. The original document was moved to README-MatchMaster.md.
- Added files to .gitignore to ignore more local workspace content. This is to facilitate development on Docker as well as the original GitPod.
- Added Dockerfile and changed access settings to allow local Docker development
- Add .python-version file as specified by Heroku from mid-2025.
