# Welcome to Flights Service

## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of teh downloaded project
- Create a `.env` file in the root directory and add the following environment variable
  - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": "YOUR_USERNAME",
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}


```
- Once you have added db config as listed above, go to the src folder from your terminal and execute `npx sequelize db: create`
```

## Tables 

### City -> id,name,created_at,updated_at
### Airport -> id,name,address,city_id,created_at,updated_at
    Relationship -> City has many airports and Airport belongs to a city(one to many)

