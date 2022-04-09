# test-er-app

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



### Requirements:
 1. Authentication (only login. Registration is not required)
 2. All pages requires user authentication except login
 3. Please make sure to have route middlewares so authenticated user must not be able to navigate to
the login page and vice versa
 4. After login user must be redirected to /users page when he can see the list of users (please make
sure to use backend pagination). Users list must be shown in a table. With this fields – Index (not the id),
Avatar, Full Name, Email, Actions. The avatar and full name must be links to user’s single page.
 5. In user’s single page user need to be able to see all information (Avatar, id, email, first name, last
name).
 6. Action buttons
 6.1 Edit – open popup with already filled inputs (only name and job) and “Edit” button on the bottom
of the popup, details see in API doc
 6.2 Delete – the click on delete button will open a confirmation popup and if user confirmed, call the
api endpoint which will delete the correspondi
