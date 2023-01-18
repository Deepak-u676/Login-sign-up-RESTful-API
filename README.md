------------------POST method ------------------------
http://localhost:8000/api/register 

------------------POST method ------------------------
http://localhost:8000/api/login

------------------GET method -------------------------
http://localhost:8000/api/profile

------------------GET method -------------------------
http://localhost:8000/api/logout

------------------help-link---------------------------
https://medium.com/@sarthakmittal1461/to-build-login-sign-up-and-logout-restful-apis-with-node-js-using-jwt-authentication-f3d7287acca2

{
  "succes": true,
  "user": {
    "name": "dell",
    "firstname": "logi",
    "lastname": "tech",
    "email": "logitech123@gmail.com",
    "password": "$2b$10$pFCoQ9.yrm5jb1ZaiwLjjeaTaoazo4mFDTGYoWi56UbPlbW/ITrZ2",
    "password2": "$2b$10$pFCoQ9.yrm5jb1ZaiwLjjeaTaoazo4mFDTGYoWi56UbPlbW/ITrZ2",
    "_id": "63c68b546d49929cde8d48af",
    "__v": 0
  }
}

-------------------------user register ------------------------------------
{
    "name":"deepak",
    "firstname": "sarveshw",
    "lastname": "upadhyay",
    "email": "sarveshupadhyay987@gmail.com",
    "password": "sarevsh21",
    "password2": "sarevsh21"
}
------------------------------------user login------------------------------
{
    "isAuth": true,
    "id": "63c65926e975b21d969807b8",
    "email": "sarveshupadhyay987@gmail.com",
    "token": "eyJhbGciOiJIUzI1NiJ9.NjNjNjU5MjZlOTc1YjIxZDk2OTgwN2I4.6zLngfLghtywNIphSXX8vIHO4k5SmAo6R7EKdsEXjC0"
}

https://petstore.swagger.io/?_ga=2.71076631.622350366.1673975384-1366421029.1673247702#/user/createUser


***test***