Screen Recording 2021-01-22 at 01.32.59

# Travel Tracker

## What is this app about?

[Travel Tracker](https://traveltracker.netlify.app/)

Travel Tracker is an app where you can create your personal travel log and keep track of your visited countries.

Check this out!
[](https://ibb.co/wrysWQb)

## Used technologies

### Frontend

- React
- Redux
- Axios
- Simple Map
- Appolo Client

### Backend

- Node.js
- GraphQL
- Appolo Server
- Express REST API
- JWT & Bcrypt Authentication
- PostgreSQL database
- Sequelize ORM

## Goals for this project

- Demonstrate the main skills I've learned at the Codaisseur Academy;
- Build a full-stack web app from a first idea into a working version;
- Practice planning with user-stories, wireframes, datamodels, projectboard and git;
- Try out new technologies such as GraphQl, Appolo Client and Appolo Server

## User stories

**User Story/Home page**
As a user I want to see a map where I can see how many people visited chosen country

- [x] 'Home' in a navbar at the top of the page links to /
- [x] map displayed on the route /
- [x] hover effect for countries
- [x] endpoint for an amount of visitors for each country

**User Story/Sign Up**
As a new user I want to be able to sign up, so I can add a new countries and comments to my list

- [x] there is a link 'Sign up' on login page which links to /signup
- [x] inputs for email, password, name
- [x] endpoint for signup (add a new user)
- [x] success message
- [x] error message

**User Story/Map**
As log in user I want to see map where visited countries marked with a different colour and total amount of visited countries

- [x] endpoint for a list of countries for each user (length)
- [x] map
- [x] different colour for visited countries
- [x] field with total amount of visited countries
- [x] list of visited countries

**User Story/Log In**
As a user I want to be able to log in, so I can add a new country or edit list of my countries

- [x] 'Log in' in the navbar links to /login
- [x] email and password input
- [x] API endpoint /login
- [x] success message
- [x] error message

**User Story/Add a new country**
As a user I want to be able to add a new (visited ) country to my list

- [x] select form for countries
- [x] submit button
- [x] endpoint add a new country to country list
- [x] user can see success message when add country

**User Story/List of countries**
As a log in user I want to see my list of visited countries

- [x] end point for a user with the list
- [x] display list on the page

## Project Board

See the Github [projects board](https://github.com/TatianaIvanovaW/TravelTracker-client/projects/1)

## Wireframe

See the [wireframes](https://wireframepro.mockflow.com/view/M0b35bed60aad70f7608082a05bcd212e1610377798049)

## Datamodel

See the [database model](https://dbdiagram.io/d/5ffc690980d742080a35d719)

## Backend server repo

See [TravelTracker backend](https://github.com/TatianaIvanovaW/TravelTracker-server) on GitHub

## Plans to extend the project

On my project board I have a list of features I want to add

- Admin page
- Country page where users can see all visits for choosen country
- Leadership bord where users can see who travels the most...
- ... and then check out pages of other users
- A way to share the user map via social media



