#!/usr/bin/env node

const { execSync } = require('child_process');

const runCommand = command => {
    try {
        execSync(`${command}`, { stdio: `inherit` });
    } catch (e) {
        console.error(`Failed to execute ${command}`, e);
        return false;
    }
    return true;
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/JuanQuez/create-express-quez ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log("installing your project with the name");
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(code,-1);

console.log(
"              ,---------------------------,\n"+
"              | |-----------------------| |\n"+
"              | |                       | |\n"+
"              | |      Installing       | |\n"+
"              | |     Dependencies      | |\n"+
`              | |${repoName            }| |\n`+
"              | |                       | |\n"+
"              | |_______________________| |\n"+
"              |___________________________|\n"+
"            ,---|_____     []     _______|------,\n"+
"          /         |______________|           /|\n"+
"        /___________________________________ /  | ___\n"+
"        |                                   |   |    )\n"+
"        |  _ _ _                 [-------]  |   |   (\n"+
"        |  o o o                 [-------]  |  /    _)\n"+
"        |__________________________________ |/     /  / \n"+
"    /-------------------------------------/|      ( )/ \n"+
"  /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ / \n"+
"/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ / \n"+
"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) proccess.exit(code,-1);

console.log("Message random");