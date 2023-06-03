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

console.log(`🤖 Installing your project with the name ${repoName} 🤖`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exitCode(-1);

console.log(`Installing required dependencies ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) proccess.exitCode(-1);

console.log("Message random");
console.log(`cd ${repoName} & code .`);