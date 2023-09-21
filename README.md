# Jobs-DATN-Shoes-E-BE-Nodejs

# APIS

## USERS

### GET ALL: METHOD GET

http://localhost:8000/api/v1/users

### GET BY ID: METHOD GET

http://localhost:8000/api/v1/users/{id}

### GET BY EMAIL: METHOD GET

http://localhost:8000/api/v1/users

body: {"email": "example@email.com"}

### CREATE USER: METHOD POST

http://localhost:8000/api/v1/users

required fields: email, username, password

body: {
"email": "example@email.com",
"password": "example",
"username": "example",
"fullname": "example"
}

### UPDATE USER: METHOD PATCH

http://localhost:8000/api/v1/users/{id}

one of fields: {email, password, username, fullname}

body: {
"email": "example@email.com",
"password": "example",
"username": "example",
"fullname": "example"
}

### DELETE USER: METHOD DELETE

http://localhost:8000/api/v1/users/{id}
