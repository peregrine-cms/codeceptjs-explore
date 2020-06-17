#!/bin/bash

docker run -it -v `pwd`:/tests -w /tests registry.rebelsoft.com/headless sh -c 'curl -L -o /node.xz https://nodejs.org/dist/v12.18.1/node-v12.18.1-linux-x64.tar.xz && tar -xf /node.xz -C / && rm -rf /node && ln -s /node-v12.18.1-linux-x64 /node && npm i --save-dev && mkdir -p output; xvfb-run -s \":99 -auth /tmp/xvfb.auth -ac -screen 0 1920x1080x24\" ffmpeg -y -f x11grab -video_size 1920x1080 -i :99 -codec:v libx264 -pix_fmt yuv420p  -draw_mouse 0 -r 12 -loglevel panic output/video.mp4& DISPLAY=:99  npx codeceptjs run --steps; killall ffmpeg; sleep 5'
