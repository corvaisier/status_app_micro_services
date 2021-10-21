<div id="top"></div>

<!-- PROJECT status  -->
<br />
<div align="center">

  <h3 align="center">Status app documentation</h3>

  <p align="center">
    An awesome README template to jumpstart your projects!
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

The purpose of this service is to provide an indication of the status of the various micro-services that make up the application.

Here is the list of micro-services:

- [Supabase](https://supabase.io/)
- [clarifai](https://www.clarifai.com/)

Others will quickly be added to the list

<p align="right"><a href="#top">back to top</a></p>

### Built With

This section list major frameworks/libraries used to bootstrap this project.

- [docker](https://www.docker.com/)
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

<p align="right"><a href="#top">back to top</a></p>

<!-- GETTING STARTED -->

## Getting Started

The project is divided into 3 parts: The back, the front and the database.
The set can be deployed thanks to `docker`.
As part of the development, you have to deploy the database, then launch the back and front project.
Here are the commands to perform :

### Installation

1. Go tu the [repo](https://github.com/corvaisier/status_ap)

2. Clone the repo
   ```sh
   git clone https://github.com/corvaisier/status_ap.git
   ```

3. Go into the repo
   ```sh
   cd ./status_ap
   ```

4. For just deploying BDD
   ```sh
    docker-compose run mysqldb
   ```
   If you want to check that it is working properly, you can run this command:
   ```sh
   docker ps -a
   ```
   Normally you will see something like that : 
   ```sh
   CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS                 NAMES
   2c692d9ee995   mysql     "docker-entrypoint.s…"   16 minutes ago   Up 1 minutes   3306/tcp, 33060/tcp   status_app_mysqldb_run_73cc1b047946
   ```

5. Build back / run back
   ```sh
    cd ./back_status
    npm i
    node src/server.js
   ```
   You will be able to go to http://localhost:8080/status

6. Build front / run front
   ```sh
    cd ./front_status
    npm i
    npm run start
   ```

   You will be able to go to http://localhost:3000/status

   <p align="right"><a href="#top">back to top</a></p>

<!-- USAGE EXAMPLES -->

## Usage

back_status will request into a interval micro-services in order to determine their status. 
These micro-services can work, have abnormal latency or even stop working.
It will store the result of these queries in the database and pass the information to front_status so that it can present the information.
In the event that some of the micro-services are stopped, its role is to inform the technical managers as well as the users.

