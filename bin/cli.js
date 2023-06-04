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

console.log(
"                                                  \n"+
" \x1b[36mINSTALLING YOUR PROJECT WITH NAME:\x1b[0m\n"+
`             \x1b[32,1m${repoName}\x1b[0m               \n`+
"                                         \n"+    
"  █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█\n"+
"  █\x1b[33m██ ██ ██ ██ ██ ██ ██ ██ ██\x1b[0m         █\n"+
"  █\x1b[33m██ ██ ██ ██ ██ ██ ██ ██ ██\x1b[0m         █\n"+
"  █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█\n"+
"                                         \n"+
"    █    █▀▀▀█ █▀▀█ █▀▀▄ ▀█▀ █▄  █ █▀▀█  \n"+
"    █    █   █ █▄▄█ █  █  █  █ █ █ █ ▄▄  \n"+
"    █▄▄█ █▄▄▄█ █  █ █▄▄▀ ▄█▄ █  ▀█ █▄▄█  \n"+
"                                         \n"
);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(code,-1);

console.log(
    "                                             \n"+
    "         \x1b[36mINSTALLING DEPENDENCIES\x1b[0m");

const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) proccess.exit(code,-1);

console.log(
"                                         \n"+    
"  █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█\n"+
"  █ ██ ██ ██ ██ ██ ██ ██ ██ ██ ██ ██ ██ █\n"+
"  █ ██ ██ ██ ██ ██ ██ ██ ██ ██ ██ ██ ██ █\n"+
"  █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█\n"+
"                                         \n"+
"               █▀▀█ █▀▀▀█ █              \n"+
"               █ ▄▄ █   █ █              \n"+
"               █▄▄█ █▄▄▄█ ▄              \n"+
"                                         \n"
);
