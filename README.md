# Stpes to create nodejs with typescript
## "npm init -y" to create a package.json
## "tsc --init" to create a tsconfig.json
## create a dist and src folders
## in src, create a first.ts
  const hello:string = "hello, world";
  console.log(hello);
## for tsconfig.json, set 
   "sourceMap": true, 
   "outDir": "dist",   
## for package.json, add dev devdependencies: 
   "typescript": "5.3.3"
## for launch.json for vs code debugging. set
  "program": "${workspaceFolder}/dist/first.js"
## "yarn install" to install package
## npx tsc to compile the codes.
## now you can debug it
