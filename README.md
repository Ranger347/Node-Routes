# Node-Routes

Use routes such as /directory in a website to better provide an organized structure for a website using Node JS.

## Node JS and NPM are required for this project. If not installed please install those first. :)

### What packages need to be installed?

*This project does not contain the files from the downloads below so please follow these steps:*

First, even before installing packages, make sure to use:

```text
npm init -y
```

Then install these packages:

```text
npm install express
npm install cors
npm install path
```

Also helpful to install:

```text
npm install nodemon
```

After installing nodemon, in the `package.json`, in the scripts make sure to change it to:

```json
"scripts": {
    "start": "nodemon app.js"
},
```

Also while in the `package.json` it may be helpful to add:

```json
"type": "module",
```

under the main. This code tells the entire project to use `import module from package;` instead of `require("module");`. Some earlier versions of React come default with this feature default, but not in Node JS.

Then, in the terminal you can just type, `npm start` and the server will begin to to work.
