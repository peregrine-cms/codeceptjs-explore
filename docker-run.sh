#!/bin/bash

# Since we are mounting our workspace and sharing it with Docker, we need to
# make sure that we remove the node_modules to ensure there are no Node conflicts
# between tests running on the local host and those running on the Docker container.
if [ -e `pwd`/node_modules ]; then
  rm -rf `pwd`/node_modules
fi

docker run --net=host \
	-v $PWD:/tests \
        -w /tests \
	peregrinecms/e2e-tests:latest \
        sh -c 'npm i --save-dev && mkdir -p output; xvfb-run -s ":99 -auth /tmp/xvfb.auth -ac -screen 0 1920x1080x24" ffmpeg -y -f x11grab -video_size 1920x1080 -i :99 -codec:v libx264 -pix_fmt yuv420p  -draw_mouse 0 -r 12 -loglevel panic output/video.mp4& DISPLAY=:99  npx codeceptjs run --steps; killall ffmpeg; sleep 5'
