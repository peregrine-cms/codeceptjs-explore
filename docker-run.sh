#!/bin/bash
#
# docker run [options]
# -v, --volume list       Bind mount a volume
# -w, --workdir string    Working directory inside the container
#     --rm                Automatically remove the container when it exits

docker run --net=host \
	-v $PWD:/tests \
        -w /tests \
	codeception/codeceptjs

#  lsoft.com/headless sh -c 'npm run clean && mkdir -p output; xvfb-run -s \":99 -auth /tmp/xvfb.auth -ac -screen 0 1920x1080x24\" ffmpeg -y -f x11grab -video_size 1920x1080 -i :99 -codec:v libx264 -pix_fmt yuv420p  -draw_mouse 0 -r 12 -loglevel panic output/video.mp4& DISPLAY=:99 npm test; killall ffmpeg; sleep 5'
