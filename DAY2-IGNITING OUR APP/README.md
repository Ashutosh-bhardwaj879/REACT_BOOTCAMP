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

Hot hodule Reloading
HYR
Fite watcher algorithm -
minify
BUNDLING
Cleaning our Code
Dev abd Production Build
Super Fast build algorithm
Inaqe optimization
Cachinq white development
Conpression
Conpatbte with Older version Of browser
HTTPS on dev
port Nunt)er
Consistent Hashing Algorithm
Zero Confiq