<a name="readme-top"></a>

<h1 align="center">Digital Agriculture App 📑</h1>

## Summary
<ol>
  <li><a href="#digital-agriculture-app-requirment">Requirment</a></li>
  <li><a href="#description">Description</a></li>
  <li><a href="#technologies">Technologies</a></li>
  <li><a href="#features">Features</a></li>
  <li><a href="#how-to-run">How to Run</a></li>
</ol>


## Digital Agriculture App Requirment
Need to develop an app that offers common functionality for digital agriculture apps (such as OAuth-based Single Sign-On, properties, seasons, field records, etc). The API is built on HTTP and is mostly RESTful: It has predictable resource URLs, returns HTTP response codes to indicate errors. It also accepts and returns JSON in the HTTP body

<br/>

## Description
The application consists of an API and a database designed specifically for Digital Agriculture App. Developed in Node.js, it uses Sequelize to model data efficiently. It follows the MSC (Model-Service-Controller) architecture and REST standard principles.

To ensure the security of information, all CRUD (create, read, update, and delete) operations are preceded by JWT token authentication. This means that the user needs to provide correct credentials to perform an operation, thus maintaining the integrity of the data.

<br/>

## Technologies

- dotenv
- Express
- JavaScript
- Joi
- JWT
- MySQL
- Node.js
- Nodemon
- Sequelize

<br/>

## Features

<ul>
  <li>User login.</li>
  <li>JWT token generation and authentication.</li>
  <li>Create, list, and delete users.</li>
  <li>Create Organization.</li>
  <li>Create Property.</li>
  <li>Create Tree structre of Regions & Fields.</li>
</ul>

## How to Run

To run the project, follow the steps below.

1. Clone the repository;

```
git clone [https://github.com/anandmahajan267/digital_agriculture.git](https://github.com/anandmahajan267/digital_agriculture.git)
```

2. Navigate to the project root;

```
cd digital_agriculture/
```



  <summary><strong>💽 Locally</strong></summary>

1. Make sure you have **Node.js** installed in version 16 or higher.

2. In the project root, install the project dependencies.

```
npm install
```

3. Configure the environment variables:

- Rename the `.env.example` file (available in the project root) to `.env`;
- Set the `MYSQL_HOST`, `MYSQL_PORT`, `MYSQL_USER`, `MYSQL_PASSWORD` variables for your local environment.

4. Create and populate the database with the command below.

```
npm run prestart
```

5. to updated the database with the sample data

```
npm run seed
```
  
6. To start the server, use one of the commands below.

```
// Command 1 - Needs to be run again in case of code changes
npm run start

// Command 2 - Restarts the server automatically if there is any code change
npm run start:dev
```

7. Postman Colleaction .
```
git clone [https://github.com/anandmahajan267/digital_agriculture.git](https://github.com/anandmahajan267/digital_agriculture.git)
```

<br/>
