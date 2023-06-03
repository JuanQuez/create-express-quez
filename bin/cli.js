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

console.log(`\x1b[32mInstalling your project with the name ${repoName}\x1b[0m`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(code,-1);

console.log(`Installing required dependencies ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) proccess.exit(code,-1);

console.log("Message random");