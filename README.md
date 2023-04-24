# Tweets project.

---

## Description

_The application consist from Home and Tweets pages. Home page is page for
welcome and general information. The Tweets page loads user cards from the
database. By clicking on the Follow or Following buttons in the card, you can
subscribe or nsubscribe to a user. There are also different types of user
filtering, by type and name._

---

## Table of Contents

- [Technologies Used](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Routes](#routes)

## Technologies Used <a id="technologies"></a>

- React
- React Router
- Axios
- MockAPI
- Styled-components

---

## Installation <a id="installation"></a>

```
$ git clone https://github.com/Siryi-Oleksandr/tweet-card-test.git
$ cd your-project
$ npm install
$ npm start

```

---

## Usage <a id="usage"></a>

You can freely move between pages. On Tweets page choose any interesting user
and subscribe and follow it. Or conversely, you can unsubscribe from anyone.
Also you can filter users by name or status of the subscription.

---

## API <a id="api"></a>

The app uses the MockAPI service to simulate a backend. The users resource has
been created and the user object has the following fields: id, user, tweets,
followers, avatar.

---

## Routes <a id="routes"></a>

- '/' - Home page
- '/tweets' - Tweets page

---
