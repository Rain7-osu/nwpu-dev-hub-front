#!/bin/bash

sudo git pull --rebase

echo 'pull master...'

sudo npm run reinstall

echo 'install dependencies...'

sudo npm run build

echo 'building...'

pm2 stop  www

echo 'stop the server and restarting...'

pm2 start www

echo 'started the pm2 service'
