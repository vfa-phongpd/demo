<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

``````

# ERD
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="./img/erd.img.png" width="100%" alt="Erd Picture" /></a>
</p>


- In project has 2 Table Users and TodoList:

  + User table has data fields: Id, Name, Email, Password, Status, Create_at, Update_at. Id is the Primary Key.

  + TodoList table has data fields: Id, Priority, Is_Complete, Title, Content, User_id is foreign key of table Users.

# Use Case
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="./img/UseCase.img.png" width="100%" alt="Use Case Picture" /></a>
</p>

- In system Users can: 
  + Login, Register by your Email.
  + Add TodoList, Find your todoList, Update and Delete Todolist.

# Do it
  <p><h3>[Back-End]: Phan Đình Phong - PhongPD</h3></p>

+ Create API SignUp, SignIn User

<p align= "center">
  <a href="http://nestjs.com/" target="blank"><img src="./img/Login.png" width="120%" alt="Use Case Picture" /></a>
  Login
</p>


<p align= "center">
  <a href="http://nestjs.com/" target="blank"><img src="./img/createUser.png" width="120%" alt="Use Case Picture" /></a>
  Register
</p>

+ Create API CRUD TodoList

<p align= "center">
  <a href="http://nestjs.com/" target="blank"><img src="./img/createList.png" width="120%" alt="Use Case Picture" /></a>
  Create TodoList
</p>

<p align= "center">
  <a href="http://nestjs.com/" target="blank"><img src="./img/updateList.png" width="120%" alt="Use Case Picture" /></a>
  Update TodoList
</p>

<p align= "center">
  <a href="http://nestjs.com/" target="blank"><img src="./img/deleteList.png" width="120%" alt="Use Case Picture" /></a>
  Remove Todolist
</p>


    
+ Create API Filer Tittle, UserID, IdTodolist

<p align= "center">
  <a href="http://nestjs.com/" target="blank"><img src="./img/filterByIdList.png" width="120%" alt="Use Case Picture" /></a>
  Filter by id TodoList
</p>

<p align= "center">
  <a href="http://nestjs.com/" target="blank"><img src="./img/filterUserById.png" width="120%" alt="Use Case Picture" /></a>
  Filter by id Users
</p>


<p align= "center">
  <a href="http://nestjs.com/" target="blank"><img src="./img/filterUserByTiitle.png" width="120%" alt="Use Case Picture" /></a>
  Filter by id Tittle
</p>



