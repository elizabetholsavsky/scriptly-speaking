<div align="center">
  
  <a href="https://scriptlyspeaking.herokuapp.com/"><img src="https://github.com/elizabetholsavsky/scriptly-speaking/assets/116515976/9fb5b605-c5f1-46b9-89eb-cc9067a6f9d9" width="500" height="auto"></a>
  
  [https://scriptlyspeaking.herokuapp.com/](https://scriptlyspeaking.herokuapp.com/)
  
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

*Scriptly Speaking* is a CMS-stlye blog site created using the MVC paradigm. The project uses Handlebars.js as the templating lanuage, Sequelize as the ORM, and the express-session npm package for authentication. Users have the ability to create, edit, and delete both posts and comments when logged in to the site. Nonmembers have the ability to only view posts and comments and are prompted to log in if they would like to leave a comment or post.  

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Questions](#questions)

## Installation

No installation is required when visiting the [deployed Heroku link](https://scriptlyspeaking.herokuapp.com/).

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

Access the [deployed Heroku link](https://scriptlyspeaking.herokuapp.com/) using your preferred browser. (Local users can access `http://localhost:3001` using `npm start`)
* Sign up by creating a unique username and strong password. (Passwords must contain one uppercase letter, one lowercase letter, a digit, and a special character.) You will automaticaly be logged in after account creation. Remember your log in credentials for future visits.


## License

[MIT License](https://opensource.org/licenses/MIT)

## Contributing

## Questions

Contact:

* Github [elizabetholsavsky](https://github.com/elizabetholsavsky)

* Email elizabetholsavsky@gmail.com
