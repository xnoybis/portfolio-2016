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

cp -an ./bower_components/foundation-sites/scss/. ./src/scss/foundation/
cp -a ./bower_components/jquery/dist/jquery.min.js ./src/js/vendors/
cp -a ./bower_components/jquery.easing/js/jquery.easing.min.js ./src/js/vendors/
cp -a ./bower_components/imagesloaded/imagesloaded.pkgd.min.js ./src/js/vendors/

npm install
gulp all
