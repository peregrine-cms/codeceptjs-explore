#!/bin/bash

if [ ! -e node_modules.docker ]; then
  mkdir node_modules.docker
fi

if [ -e node_modules ]; then
  rm node_modules
fi

ln -s node_modules.docker node_modules

docker run --net=host \
	-v $PWD:/tests \
        -w /tests \
	peregrinecms/e2e-tests:latest \
        sh -c 'npm i && mkdir -p output; xvfb-run -s ":99 -auth /tmp/xvfb.auth -ac -screen 0 1920x1080x24" ffmpeg -y -f x11grab -video_size 1920x1080 -i :99 -codec:v libx264 -pix_fmt yuv420p  -draw_mouse 0 -r 12 -loglevel panic output/video.mp4& DISPLAY=:99  npx codeceptjs run --steps; killall ffmpeg; sleep 5'
