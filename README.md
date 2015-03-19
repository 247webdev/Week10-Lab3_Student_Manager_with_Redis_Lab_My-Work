## Redis Student Manager App

For tonight's lab, we'd like you to build an app that uses node on the backend with redis for persistance. 

### Getting Started

1. Create a folder and cd into it
2. `touch app.js`
3. `npm init`
4. `touch .gitignore`
5. `echo "node_modules" >> .gitignore`
6. inside this folder, create another folder called views
7. `git init`, add and commit.
6. `npm install --save` the required packages (express, ejs, body-parser, method-override, redis)
7. Think about what redis data structure you are going to use to store your students 
8. Begin by including the required dependencies in your `app.js` and add an `index.ejs` to your views folder.
9. Start working on your routes 


### Basic Requirements

Your application should list out students and at a minimum, offer the option to create and delete all students. **Each student should have a name and nothing else.** 

### Bonus

Allow students to be updated and include functionality to delete a single student.

### Super-Bonus

Make your application a SPA (single page application) that uses AJAX