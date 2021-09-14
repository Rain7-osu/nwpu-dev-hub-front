#!/bin/bash

git pull --rebase

echo 'pull master...'

npm run reinstall

echo 'install dependencies...'

npm run build

echo 'building...'

pm2 stop  www

echo 'stop the server and restarting...'

pm2 start www

echo 'started the pm2 service'
