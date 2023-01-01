# Thumb rule is that we should put all files in git ignore which the server can generate
# Never put package.jso in the gitignore directory
# dist should be added to .gitignore

IMPORTANT THING ABOUT PACKAGE LOCK.JSON
----------------------------------------

1) Package lock json is a very imp file , it locks the file
version
2) Never put it in git.ignore, you are doing a blunder
you will face production vs dev env problem
3) It maintians the verison as well as the hash of it also,
It is exactly same as that of production thats why it has hash
It maintinas the integrity
4)

SHOULD YOU ADD NODE_MODULES IN GIT IGNORE
-------------------------------------------
YES YES YES
WE CAN GENERATE EVRYTHING IN NODE MDULES,
IF I HVAE MY PACKAGE LOCK.JSON

ONE COPY OF NODE MODULE SIS IN PC

WE SHIP PACKAGE.LOCK.JSON AND IT WILL TAKE CARE OF THAT



IMP POINT
---------
1) npm init
2) npm install -D parcel
-D --> dev - dependency What is dev dependency??
tilde vs carret in the package.json file

How will parcel minify your code??
----------------------------------------
parcel is a beast , parcel uses a lot of thigns to
optimize your app
so thats why node-modules become huge



NODE MODUELS ARE ON OUR SERVER,
BUT CDN IS DIFFERENT
SO LET US KEEP MY REACT IN THIS MODULE
WHAT IF UNPKG GOES DOWN?
LETS KEEP THINGS ON NODE_MODULES


npm install vs npm i --> both are same

npx =  execute using npm


I will never touch packge locak and node_module

npx parcel index.html

*****
🚨 Parcel encountered errors
@parcel/transformer-js: Browser scripts cannot have imports or exports.
C:\Users\ashut\OneDrive\Desktop\NAMASTE-REACT\DAY1\App.js:12:1
  11 | //     </script > -->
> 12 | import React from "react";
>    | ^^^^^^^^^^^^^^^^^^^^^^^^^^
  13 | import ReactDOM from "react-dom";
  14 | C:\Users\ashut\OneDrive\Desktop\NAMASTE-REACT\DAY1\index.html:22:5
  21 |     ></script> -->
> 22 |     <script src="App.js"></script>
>    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The environment was originally created here
  23 |   </body>
  24 | </html>
Add the type="module" attribute to the <script> tag


**npx parcel build index.html

🚨 Build failed.

@parcel/namer-default: Target "main" declares an output file path of "App.js" which does not match the compiled bundle
type "html".

  C:\Users\ashut\OneDrive\Desktop\NAMASTE-REACT\DAY1\package.json:5:11
    4 |   "description": "",
  > 5 |   "main": "App.js",
  >   |           ^^^^^^^^ Did you mean "App.html"?
    6 |   "scripts": {
    7 |     "test": "echo \"Error: no test specified\" && ex
  💡 Try changing the file extension of "main" in
     package.json.

PLEASE REMOVE THE main tag in package.json


WE SHOULD PUT PARCEL.CACHE IN GIT IGNORE


TRANSITIVE DEPENDENCIES

1)Hot hodule Reloading
2)HYR
3)Fite watcher algorithm -
4)minify
5)BUNDLING
6)Cleaning our Code
7)Dev and Production Build
8)Super Fast build algorithm
9)Imaqe optimization
10)Cachinq white development
11)Conpression
12)Conpatbte with Older version Of browser
13)HTTPS on dev
14)port number
15)Consistent Hashing Algorithm
16)Zero Confiq

### HOMEWORK
---------------------------------------------------

# Q1)What is NPM?

About npm
---------
npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.

npm consists of three distinct components:

the website
the Command Line Interface (CLI)
the registry

Use the website to discover packages, set up profiles, and manage other aspects of your npm experience. For example, you can set up organizations to manage access to public or private packages.

The CLI runs from a terminal, and is how most developers interact with npm.

The registry is a large public database of JavaScript software and the meta-information surrounding it.

Use npm to . . .
----------------
Adapt packages of code for your apps, or incorporate packages as they are.
Download standalone tools you can use right away.
Run packages without downloading using npx.
Share code with any npm user, anywhere.
Restrict code to specific developers.
Create organizations to coordinate package maintenance, coding, and developers.
Form virtual teams by using organizations.
Manage multiple versions of code and code dependencies.
Update applications easily when underlying code is updated.
Discover multiple ways to solve the same puzzle.
Find other developers who are working on similar problems and projects.

# Q2)What is `Parcel/Webpack`? Why do we need it?
Ans - Parcel/Webpack is a Bundler.

# What is a bundler?
In case you don't know what a bundler is, a bundler follows a simple concept: you give it your files, including style files like Sass, Less or Stylus, your images, fonts, JavaScript files and they will assemble them in a seamless way, so they work perfectly on production. Your CSS preprocessors will be able to be compiled and included without further actions.

FYI : create-react-app uses Webpack by default along with Babel.

https://dev.to/adnanbabakan/comparison-webpack-or-parcel-which-one-is-better-43jo

# Q3)What is `.parcel-cache`?
Ans - cache folder (or . parcel-cache in parcel v2) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

# Q4)What is `npx`?
Ans - NPX: The npx stands for Node Package Execute and it comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package

npx parcel index.html <-- This command executes parcel and provides index.html as entrypoint for our build app

# Q5)What is difference between `dependencies` vs `devDependencies`?
Ans -
devDependencies is for local development environment and dependecies is for global environment.

Dependencies: In package.json file, there is an object called dependencies and it consists of all the packages that are used in the project with its version number. So, whenever you install any library that is required in your project that library you can find it in the dependencies object.

Syntax:

npm install <package name>
Example: Installing the moment module for formatting the time in the project using the following command:

npm install moment


Dev Dependencies: In package.json file, there is an object called as dev Dependencies and it consists of all the packages that are used in the project in its development phase and not in the production or testing environment with its version number. So, whenever you want to install any library that is required only in your development phase then you can find it in the dev Dependencies object.

Use the below command to add more dev Dependencies in your project:

npm install <package name> --save-dev
Example: Installing the bootstrap module that we want to use in the development phase only and not in the production or testing phase for the project, use the following command:

npm install bootstrap --save-dev


Peer Dependencies: In package.json file, there is an object called as peerDependencies and it consists of all the packages that are exactly required in the project or to the person who is downloading and the version numbers should also be the same. That is the reason they were named as peerDependencies. The best example is ‘react’ which is common in every project to run similarly.

Note: These dependencies are not automatically installed. npm gives a warning message whenever there is a peer Dependency and these are different dependencies compared to the above-discussed dependencies.

https://www.geeksforgeeks.org/difference-between-dependencies-devdependencies-and-peerdependencies/


# Q6) What is Tree Shaking?
Tree shaking
Tree shaking is a term  Q7commonly used within a JavaScript context to describe the removal of dead code.

It relies on the import and export statements to detect if code modules are exported and imported for use between JavaScript files.

In modern JavaScript applications, we use module bundlers (e.g., webpack or Rollup) to automatically remove dead code when bundling multiple JavaScript files into single files. This is important for preparing code that is production ready, for example with clean structures and minimal file size.

# Q7) What is Hot Module Replacement?
Hot Module Replacement
Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways:

Retain application state which is lost during a full reload.
Save valuable development time by only updating what's changed.
Instantly update the browser when modifications are made to CSS/JS in the source code, which is almost comparable to changing styles directly in the browser's dev tools.

# Q8) List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words?
Ans -
1)Hot hodule Reloading
2)HYR
3)Fite watcher algorithm -
4)minify
5)BUNDLING
6)Cleaning our Code
7)Dev and Production Build
8)Super Fast build algorithm
9)Imaqe optimization
10)Cachinq white development
11)Conpression
12)Conpatbte with Older version Of browser
13)HTTPS on dev
14)port number
15)Consistent Hashing Algorithm
16)Zero Confiq

Minify <---Minifies our code. It just make it compact and remove uncessary long variable names, spaces
Image optimization <--- Images basically increase website loading time. Image optimization does optimization at image level and speed up the page loading
Compression
File Watcher <---An algorithm which parcel uses to keep track of changes in any app files and react accordingly
HMR( Hot module Replacement) <--HMR keep track of any module changes and reloads the page to make change effective
Port number <--Keep track of already used port number and allocate new unused port number
Code cleanup <--Uncessary console.log messages are removed through this process


# Q9) What is `.gitignore`? What should we add and not add into it?
Ans -
.gitignore is the place where we put our files that need not be sent to server. Usually we put those files here which can be autogenrated at production server
For example in gitignore we add node-modules because node-modules can be autogenrated at production server. We should not add  any packagejson file because those are needed at server to get the packages.

# Q10)What is the difference between `package.json` and `package-lock.json?
Ans -
package-lock.json
--------------------------------
To avoid differences in installed dependencies on different environments and to generate the same results on every environment we should use the package-lock.json file to install dependencies.

Ideally, this file should be on your source control with the package.json file so when you or any other user will clone the project and run the command “npm i”, it will install the exact same version saved in package-lock.json file and you will able to generate the same results as you developed with that particular package.

package.json
----------------------------------------------------
If your project uses node package manager (NPM) you will have a package.json file somewhere in your code base.

The package.json file records the minimum version of different dependencies that your app needs. When a collaborator on the code does npm install the dependency versions installed will be those dictated in the package.json or a higher/more recent reversion. If you update the versions of a particular package, the change is not necessarily going to be reflected here.

The package.json file is used for more than just dependencies. It also is used to define project properties, descriptions, and license information.
https://medium.com/dlt-labs-publication/package-json-vs-package-lock-json-c8d5deba12cb
https://www.knowledgehut.com/blog/web-development/package-json-vs-package-lock-json

# Q11)Why should I not modify `package-lock.json`
Ans -
package-lock.json actually is large information center which keeps track of package and version and dependency information which is used to run app if that get modified then it will create conflict at server side and produce wrong results

# Q13) What is `node_modules` ? Is it a good idea to push that on git?
Ans -
You can think of the node_modules folder like a cache for the external modules that your project depends upon. When you npm install them, they are downloaded from the web and copied into the node_modules folder and Node. js is trained to look for them there when you import them (without a specific path).
Yes ,please place it in the gitignore becuase it can be regenrated using package,json files

# Q14)What is the `dist` folder?
Ans -
'dist' folder conatains set of files which is compact version of actualy code files. This get generated during npx command.

# Q15)What is `browserlists`
Ans -
rowserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.

# Read about dif bundlers: vite, webpack, parcel
https://ritza.co/articles/gen-articles/webpack-vs-babel-vs-rollup-vs-gulp-vs-parcel-vs-vite/

# Read about: ^ - caret and ~ - tilda

DAY2-IGNITING OUR APP\wheelbarrel-with-tilde-caret-white-bg-w1000.jpg

https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json

