Boilerplate repo for famo.us/angular builds.

## Dependencies ##

You should install these frameworks at a system level before cloning the repo. Homebrew is helpful for installing node.js on a Mac, otherwise all other packages should be handled through npm. Note: if you have previously installed SASS via the gem, uninstall SASS and run the node-sass compiler instead, node-sass is a port of lib-sass and is much faster to compile.

* [node.js] (http://www.nodejs.org)
* [bower] (http://bower.io)
* [gulp] (http://gulpjs.com)
* [sass] (http://www.sass-lang.com)
* [bourbon] (http://www.bourbon.io)


Here are the shell commands so you don't have to look them up: (npm install commands may require sudo)

```
brew install node
npm install -g bower
npm install -g node-sass
npm install -g node-bourbon
npm install -g gulp
```

## Github ##

Fork the repo.
Clone the repo into a local folder. 

Use the following command to clone the repo, replacing [username] with your Github username.

```
git clone https://github.com/[username]/fa-boilerplate.git
```


## Installation ##

In the root folder of the repo, run the package installer for the project. This will initiate a bower install of all necessary libraries.

```
npm install
```

In the project root directory, this command will set up node_modules folder and various dev dependencies. If you do not have ownership rights on the folders that will be created, npm or bower could throw an error. If bower fails to run, `bower install`.

After that, you should be able to run 'gulp' in the root directory of the repo and visit localhost:9000/ in your browser.
