<h1 align="center">Satomi 聡美</h1>
<p align="center">
    <a title="CodeClimate" href="https://codeclimate.com/github/kyostra/satomi/maintainability"><img src="https://api.codeclimate.com/v1/badges/3cb373a64e81a2386ec7/maintainability" alt="CodeClimate" /></a>
    <a title="TravisCI" href="https://travis-ci.org/kyostra/satomi"><img src="https://img.shields.io/travis/kyostra/satomi.svg?style=flat" alt="TravisCI" /></a>
    <a title="DavidDM" href="https://david-dm.org/kyostra/satomi"><img src="https://img.shields.io/david/kyostra/satomi.svg?style=flat" alt="DavidDM" /></a>
    <a title="license" href="https://github.com/kyostra/satomi/blob/master/LICENSE"><img src="https://img.shields.io/github/license/kyostra/satomi.svg" alt="License" /></a>
</p>

-------------------

Satomi is a discord bot created in JavaScript (Node.js) using Eris and Sylphy. It is currently a project of mine to learn JavaScript in a fun way. I hope to later add some exciting features in the future.

If you don't mind, you can check out Satomi's trello here -> [Trello Link](https://trello.com/b/TRspnxiz/satomi)

## Satomi is built on...
* [Node.js](https://nodejs.org/en/) : A Javascript runtime for scalable network applications
* [Eris](https://github.com/abalabahaha/eris) : A Discord JavaScript Library for Node.js
* [Sylphy](https://github.com/pyraxo/sylphy) : A framework for Eris allowing easy implementation of commands
* [ESLint](https://eslint.org) : A configurable JavaScript linter for old and current ECMAScript versions
* [PM2](https://pm2.keymetrics.io/) : An advanced process manager for applications in production

## Want to invite Satomi?
As of right now, I am not completely done with Satomi's development. Im aiming for public use by version 1.0.0, as by then I hope to have most of the features I want on Satomi present. I also don't have a job currently to pay for a VPS to keep the bot online 24/7 >.>

## Bot Usage
If you want to use this bot just for your own server, feel free to. But if I find my code being used by you under a different name or you claiming to be the owner of the bot/code, I'll personally deal you and your infringement of my license. **Keep in mind I will probably not allow this to occur once I make the bot available publicly and hosted by VPS.**

## Development
Thanks for your interest in my code, I have added these setup instructions to help get you started on tinkering with the code. **Please pay attention to the license I have below.**

### Installing
First you can either download the latest release or install straight from github through the console like so :
```
git clone https://github.com/kyostra/satomi.git
cd satomi/
npm install
```
* This will install all of the code from the repository and also with npm, install every dependency needed for the bot to fully function.

### Linting
ESLint is used for this bot with no exeptions for the linter. You can lint the code with :
```
npm run lint
```
* This script will look through the "src" directory and make sure the files meet the ecma requirement(s)
* The regular script for this is : `eslint src` , which you can find in the package.json

## Hosting the Bot locally :
This requires the set up of just 2 env files. You also need an IDE to configure all of this and download all dependencies I have listed in package.json. I recommend using [Visual Studio Code](https://code.visualstudio.com/). You also need to download [Node.js](https://nodejs.org/en/) to be able to run the bot and download its dependencies with [npm](https://www.npmjs.com/). **Refer to "Bot Usage", the same principles apply**

*And if you don't want to use the Satomi name then you'll have to dabble more into the code to change the client name and the help commands as well as some other things too. This is a big burden if you have never coded in your life.*

For .env (and for .env.example, have the values empty while .env has the values defined)...
```env
# Bot configuration

# Bot Masterkeys
CLIENT_TOKEN=
CLIENT_PREFIX=
OWNER_ID=
ADMIN_IDS=

# Sharding
CLIENT_PROCESSES=
CLIENT_SHARDS_PER_PROCESS=

# Module Keys
JOINLOG_ID=
LEAVELOG_ID=

# MongoDB
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_DBNAME=

# API
API_OSU=
API_TWITCH=
API_REDDIT_ID=
API_REDDIT_SECRET=
API_REDDIT_REFRESH=
API_REDDIT_ACCESS=
```
* You get your bot token from [here](https://discordapp.com/developers/applications/me), you need to create an application and then create a bot user. After, you need to invite the bot to your/a discord server to use its commands. (There are tutorials on how to do this if you are confused)
* The ownerID is the person who owns the application from above. You get your ID from right clicking your name and selecting "Copy ID" then paste it in the JSON. *To enable this, open your discord app then go to User Settings>Appearance>Advanced>Turn on Developer Mode*
* You get the channel ID's the same way you did your ownerID. You right click on the channel and click "Copy ID", then paste it in this file.
* As of version 0.9.0, Satomi uses `.env` for holding keys instead of a json file. However, if you do not like using `.env`, you can easily switch the code to use a json file.
* I suggest you delete `src/modules/mod/GuildLogger.js` and the `# Module Keys` section in `.env` since you are just self hosting.

### Running the bot :
After setting up the env files, configure the pm2-*.json files to your liking. After setting them up, you start the bot with pm2 (install globally or locally)

```
$ pm2 start pm2-master.json
$ pm2 start pm2-satomi.json
$ pm2 logs
```
* `Ctrl + c` will prompt you if you want to close the logs and return you to the console
* If the bot is running and you want to shut it down do: (in discord) `s.shutdown` -> (in console) `pm2 stop all`
* If you want to restart the bot after some changes `pm2 restart all`
* Only do `pm2 stop all` by itself when they bot is having a reconnect loop

## License/Author
**Satomi** © [Kyostra](https://github.com/kyostra), Released under the [AGPL-3.0 License](https://github.com/kyostra/satomi/blob/master/LICENSE)

Created and maintained by Kyostra.

> Website - [kyostra.github.io](https://kyostra.github.io) | Github - [kyostra](https://github.com/kyostra) | Twitter - [@kyostra](https://twitter.com/kyostra) | Discord - **Kyostra#6290**
