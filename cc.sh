#!/bin/bash
#
# Add hard subtitles instead of player controlled closed caption 

ffmpeg -i output/video.mp4 -vf subtitles=cc.srt output/video-`date +%Y-%m-%d-%H%M%S`.mp4
