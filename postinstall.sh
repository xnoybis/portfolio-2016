#!/bin/bash

if [ ! -d "src/js/vendors" ]; then
	mkdir ./src/js/vendors
fi

if [ ! -d "dist/css" ]; then
	mkdir ./dist/css
fi

if [ ! -d "dist/js" ]; then
	mkdir ./dist/js
fi

cp -a ./bower_components/foundation-sites/scss/. ./src/scss/foundation/
cp -a ./bower_components/jquery/dist/jquery.min.js ./src/js/vendors/

npm install
gulp all