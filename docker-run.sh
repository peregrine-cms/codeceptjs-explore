#!/bin/bash
#
# docker run [options]
# -v, --volume list       Bind mount a volume
# -w, --workdir string    Working directory inside the container
#     --rm                Automatically remove the container when it exits

# NOTE: Removing the node_modules directory is CRITICAL since the host system is sharing
#       the workspace with the container. There will be module conflicts if we don't do this.

rm -rf node_modules

docker run --net=host \
        -it \
	-v $PWD:/tests \
        -w /tests \
	peregrinecms/e2e-tests:latest \
        sh -c 'npm i --save-dev && mkdir -p output; xvfb-run -s ":99 -auth /tmp/xvfb.auth -ac -screen 0 1920x1080x24" ffmpeg -y -f x11grab -video_size 1920x1080 -i :99 -codec:v libx264 -pix_fmt yuv420p  -draw_mouse 0 -r 12 -loglevel panic output/video.mp4& DISPLAY=:99  npx codeceptjs run --steps; killall ffmpeg; sleep 5'
