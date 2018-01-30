<h1 align="center">Satomi 聡美</h1>
<p align="center">
<a title="Release" href="https://github.com/envyist/satomi/releases"><img src="https://img.shields.io/github/release/envyist/satomi.svg?style=flat"></a>
<a title="DavidDM" href="https://david-dm.org/envyist/satomi"><img src="https://img.shields.io/david/envyist/satomi.svg?style=flat"></a>
<a title="TravisCI" href="https://travis-ci.org/envyist/satomi"><img src="https://img.shields.io/travis/envyist/satomi.svg?style=flat"></a>
<a title="CodeCli" href="https://codeclimate.com/github/envyist/satomi/maintainability"><img src="https://api.codeclimate.com/v1/badges/3cb373a64e81a2386ec7/maintainability" /></a>
<a title="license" href="https://choosealicense.com/licenses/mit/"><img src="https://img.shields.io/badge/license-MIT%20License-blue.svg?style=flat"></a>
</p>

-------------------

Satomi is a discord bot created in JavaScript (Node.js) using Eris and Sylphy. It is currently a project of mine to learn JavaScript in a fun way. I hope to later add some exciting features in the future.

If you don't mind, you can check out Satomi's trello here -> [Trello Link](https://trello.com/b/TRspnxiz/satomi)

## Satomi is built on :
* [Node.js](https://nodejs.org/en/) : A Javascript runtime for scalable network applications
* [Eris](https://github.com/abalabahaha/eris) : A Discord JavaScript Library for Node.js
* [Sylphy](https://github.com/pyraxo/sylphy) : A framework for Eris allowing easy implementation of commands
* [ESLint](https://eslint.org) : A configurable JavaScript linter for old and current ECMAScript versions
* [Nodemon](https://nodemon.io) : Runs your code while you work on it and will restart it after any saved changes

## Want to invite Satomi?
As of right now, I am not completely done with Satomi's development. Im aiming for public use by version 1.0.0, as by then I hope to have most of the features I want on Satomi present. I also don't have a job currently to pay for a VPS to keep the bot online 24/7 >.>

## Bot Usage :
If you want to use this bot just for your own server, feel free to. But if I find my code being used by you under a different name or you claiming to be the owner of the bot/code, I'll personally deal you and your infringement of my license. **Keep in mind I will probably not allow this to occur once I make the bot available publicly and hosted by VPS.**

## Development :
Thanks for your interest in my code, I have added these setup instructions to help get you started on tinkering with the code. **Please pay attention to the license I have below.**

### Installing
First you can either download the latest release or install straight from github through the console like so :
```
git clone https://github.com/envyist/satomi.git
cd satomi/
npm install
```
* This will install all of the code from the repository and also with npm, install every dependency needed for the bot to fully function.

### Nodemon
You can have the bot online while you work on it with nodemon like so :
```
nodemon index.js
```
or you can use my script, which then types the above aswell~ :
```
npm run devstart
```
* This requires using the console in an IDE ("CTRL + `" for VSCode, then type whats in the code block)
* Every time you save ("CTRL + s"), it will restart the bot and you test the command right away without having to keep closing and openning the batch file

### Linting
ESLint is used for this bot with no exeptions for the linter. You can lint the code with :
```
npm run lint
```
* This script will look through the "src" directory and make sure the files meet the ecma requirement(s)
* The regular script for this is : `eslint src --ext js` , which you can find in the package.json

## Hosting the Bot locally :
This requires the set up of just 1 JSON file. You also need an IDE to configure all of this and download all dependencies I have listed in package.json. I recommend using [Visual Studio Code](https://code.visualstudio.com/). You also need to download [Node.js](https://nodejs.org/en/) to be able to run the bot and download its dependencies with [npm](https://www.npmjs.com/). **Refer to "Bot Usage", the same principles apply**

*And if you don't want to use the Satomi name then you'll have to dabble more into the code to change the client name and the help commands as well as some other things too. This is a big burden if you have never coded in your life.*

For masterkeys.json...
```
{
    "token": "BOT_TOKEN",
    "prefix": "s.", (this can be changed if you want)
    "ownerID": "OWNER_ID",
    "botLog": "CHANNEL_ID",
    "memberLog": "CHANNEL_ID"
}
```
* You get your bot token from [here](https://discordapp.com/developers/applications/me), you need to create an application and then create a bot user. After, you need to invite the bot to your/a discord server to use its commands. (There are tutorials on how to do this if you are confused)
* The ownerID is the person who owns the application from above. You get your ID from right clicking your name and selecting "Copy ID" then paste it in the JSON. *To enable this, open your discord app then go to User Settings>Appearance>Advanced>Turn on Developer Mode*
* You get the channel ID's the same way you did your ownerID. You right click on the channel and click "Copy ID", then paste it in this file.

### Running the bot :
After setting up the JSON file, just open the batch file (SatomiStart.bat) and follow the instructions to get the bot online!

or you can use this command in a console
```
npm start
```

## License :
Satomi is licensed under the [MIT License](https://github.com/envyist/satomi/blob/master/LICENSE). If you use my work, give me credit and we're good! It's that simple!
