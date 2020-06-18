#!/bin/bash

if [ ! -e node_modules.local ]; then
  mkdir node_modules.local
fi

if [ -e node_modules ]; then
  rm node_modules
fi

ln -s node_modules.local node_modules

npm i
npx codeceptjs run --steps
