<h1 align="center">Satomi 聡美</h1>
<p align="center">
<a title="Release" href="https://github.com/stellarsdev/satomi/releases"><img src="https://img.shields.io/github/release/stellarsdev/satomi.svg?style=flat-square"></a>
<a title="DavidDM" href="https://david-dm.org/stellarsdev/satomi"><img src="https://img.shields.io/david/stellarsdev/satomi.svg?style=flat-square"></a>
<a title="TravisCI" href="https://travis-ci.org/stellarsdev/satomi"><img src="https://img.shields.io/travis/stellarsdev/satomi.svg?style=flat-square"></a>
<a title="license" href="https://choosealicense.com/licenses/mit/"><img src="https://img.shields.io/badge/license-MIT%20License-blue.svg?style=flat-square"></a>
</p>

-------------------

Satomi is a discord bot created in JavaScript (Node.js) using Eris and Sylphy. It is currently a project of mine to learn JavaScript in a fun way. I hope to later add some exciting features in the future.

If you dont mind, you check Satomi's trello here -> [Trello Link](https://trello.com/b/TRspnxiz/satomi)

*Semi-colons are excused from ESLint (in package.json) due to "sylphy" being written in standard. The code is styled/written in the current ECMAScript, just no semi-colons.*

## Satomi is built on :
* [Node.js](https://nodejs.org/en/) : A Javascript runtime for scalable network applications
* [Eris](https://github.com/abalabahaha/eris) : A Discord JavaScript Library for Node.js
* [Sylphy](https://github.com/pyraxo/sylphy) : A framework for Eris allowing easy implementation of commands

## I love and support :
* [Tatsumaki](https://tatsumaki.xyz) : A popular Discord bot with many general purpose commands
* [Mee6](https://github.com/cookkkie/mee6) : Another popular Discord bot with personal dashboards and custom commands
* [Dank Memer](https://github.com/melmsie/Dank-Memer) : Adds life to your Discord server with memes!
* [Awesome Node.js](https://github.com/sindresorhus/awesome-nodejs) : Contains many useful Nodejs packages

## Bot Usage :
If you want to use this bot just for your own server, feel free to. But if I find my code being used by you under a different name or you claiming to be the owner of the bot/code, I'll personally deal you and your infringement of my license.

## Hosting the Bot locally :
This requires the set up of just 1 JSON file. You also need an IDE to configure all of this and download all dependencies I have listed in package.json. I recommend using [Visual Studio Code](https://code.visualstudio.com/). You also need to download [Node.js](https://nodejs.org/en/) to be able to run the bot and download its dependencies with [npm](https://www.npmjs.com/).

*And if you dont want to use the Satomi name then you'll have to dabble more into the code to change the client name and the help commands as well as some other things too. This is a big burden if you have never coded in your life.*

For masterkeys.json...
```
{
    token: "BOT_TOKEN",
    prefix: "BOT_PREFIX",
    ownerID: "BOT_OWNER",
    "botLog": "CHANNEL_ID",
    "memberLog: "CHANNEL_ID",
    "welcome": "CHANNEL_ID" (not needed)
}
```
* You get your bot token from [here](https://discordapp.com/developers/applications/me)
* The ownerID is the person who owns the application from above. You get your ID from right clicking your name and selecting "Copy ID" then paste it in the JSON. *To enable this, open your discord app then go to User Settings>Appearance>Advanced>Turn on Developer Mode*
* You get the channel ID's the same way you did your ownerID. You right click on the channel and click "Copy ID", then paste it in this file.

### License :
Satomi is licensed under the [MIT License](https://github.com/stellarsdev/satomi/blob/master/LICENSE). If you use my work, give me credit and we're good!
