<div align="center">
  
  <a href="https://scriptlyspeaking.tech/"><img src="https://github.com/elizabetholsavsky/scriptly-speaking/assets/116515976/9fb5b605-c5f1-46b9-89eb-cc9067a6f9d9" width="500" height="auto"></a>
  
  [https://scriptlyspeaking.tech/](https://scriptlyspeaking.tech/)
  
  <a href="">[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)</a>
  <a href="">[![Node.js Badge](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat)](https://nodejs.org/en)</a>
  <a href="">[![MySQL Badge](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=fff&style=flat)](https://www.npmjs.com/package/mysql2)</a>
  <a href="">[![Sequelize Badge](https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=fff&style=flat)](https://sequelize.org/docs/v6/)</a>
  <a href="">[![Express Badge](https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=flat)](https://expressjs.com/)</a>
  <a href="">[![Handlebars.js Badge](https://img.shields.io/badge/Handlebars.js-000?logo=handlebarsdotjs&logoColor=fff&style=flat)](https://www.npmjs.com/package/express-handlebars)</a>
  <a href="">[![.ENV Badge](https://img.shields.io/badge/.ENV-ECD53F?logo=dotenv&logoColor=000&style=flat)](https://www.npmjs.com/package/dotenv)</a>
  <a href="">[![Nodemon Badge](https://img.shields.io/badge/Nodemon-76D04B?logo=nodemon&logoColor=fff&style=flat)](https://nodemon.io/)</a>
  <a href="">[![Insomnia Badge](https://img.shields.io/badge/Insomnia-4000BF?logo=insomnia&logoColor=fff&style=flat)](https://insomnia.rest/)</a>
  
</div>

## Description

[*Scriptly Speaking*](https://scriptlyspeaking.tech/) is a CMS-style blog site created using the MVC paradigm. The project uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. Users have the ability to create, edit, and delete both posts and comments when logged in to the site. Nonmembers have the ability to only view posts and comments and are prompted to log in if they would like to leave a comment or post.  

<div align="center">

<a><img src="https://github.com/elizabetholsavsky/scriptly-speaking/assets/116515976/9119796b-4836-4b82-8fc0-76497b353e9d" width="800" height="auto"></a>
<a><img src="https://github.com/elizabetholsavsky/scriptly-speaking/assets/116515976/752c1862-c402-4c83-925a-db3202194974" width="400" height="auto"></a>
<a><img src="https://github.com/elizabetholsavsky/scriptly-speaking/assets/116515976/b440a5fb-7689-45dc-bc65-8daf7420a925" width="400" height="auto"></a>

</div>

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Contact](#contact)

## Installation

No installation is required when visiting the [deployed Heroku link](https://scriptlyspeaking.tech/).

The project can also be run locally using the following steps:
* Check if you have Node.js installed by typing `node -v` in your command line. If node is not installed, visit the [Node.js](https://nodejs.org/en) website to install. 
* Next, clone this project repository to your computer. 
* Use the command `npm i` to install dependencies. 
* Create a file in the root directory titled `.env` and include database name and personal MySQL login information:
```
DB_NAME='YOUR DATABASE NAME'
DB_USER='YOUR USERNAME'
DB_PW='YOUR PASSWORD'
```
* Open MySQL with command `mysql -u root -p` and enter your personal MySQL password. 
* Create databse with command `source schema.sql`. Log out of MySQL with command `\q`.
* Seed database with command `npm run seed`.
* Start server with command `npm start`.
* Alternatively, start server with Nodemon (and restart server automatically when making changes to code) with command `npm run watch`.

## Usage

Access the [deployed Heroku link](https://scriptlyspeaking.tech/) using your preferred browser.
* Sign up by creating a unique username and strong password. (Passwords must contain one uppercase letter, one lowercase letter, a digit, and a special character.) After confirming your password and clicking `submit`, you will be logged in automatically after account creation. Remember your log in credentials for future visits!
* Create a new post from *anywhere* on the site by clicking `NEW` in the nav bar. Enter a title and post body and click `POST`. The new post is now viewable on the 'main feed' and 'dash' view.
* The homepage ('main feed') shows all blog post previews by all users and can be accessed by clicking the logo in the nav or `HOME`. This view is public and can also be accessed when logged out. 
* The `DASH` shows only blog post previews written by the user who is currently logged in. 
* Post previews from the homepage and dash feeds are clickable and take you to a single page view of that specific post. Here you can read comments, write comments, and/or update the post *if* you are the author.
* Log out of the current session by clicking `LOG OUT` in the nav bar.

Local users can access `http://localhost:3001` using `npm start`.

## License

[MIT License](https://opensource.org/licenses/MIT)

## Contributing
This project was completed as a challenge assignment for UT Austin Boot Camps. I was able to learn and apply a great wealth of knowledge from my most current group project [Fusion Fables](http://www.fusionfables.com/), a blog-style website built for writer collaboration ([Source Code](https://github.com/HunterHester/fusion-fables)). Check out my talented teammates:
* Eric Easthope ([eeast](https://github.com/eeast))
* Hunter Hester ([HunterHester](https://github.com/HunterHester))
* Ryan Messett ([rmessett15](https://github.com/rmessett15))
* Chris McNamara ([cmcnamara15](https://github.com/cmcnamara15))
* Brian Hamlin ([MisterBham](https://github.com/MisterBham)). 

Abstract background image was created using [Midjourney](https://www.midjourney.com/) v5.

Branding logo was created using [Text Studio](https://www.textstudio.com/).

I was inspired to create my own modal after watch [this video](https://www.youtube.com/watch?v=q1fsBWLpYW4) created by [Fireship🔥](https://github.com/fireship-io).

## Contact
* Email elizabetholsavsky@gmail.com
* LinkedIn [https://www.linkedin.com/in/elizabetholsavsky/](https://www.linkedin.com/in/elizabetholsavsky/)
* Portfolio [https://elizabetholsavsky.com/](https://elizabetholsavsky.com/)
* Hashnode Blog [https://blog.elizabetholsavsky.com/](https://blog.elizabetholsavsky.com/)
* Twitter [@elizavsky](https://twitter.com/home)

