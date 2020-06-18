#!/bin/bash
#
# Add closed caption to video

ffmpeg -i output/video.mp4 -i cc.srt -c copy -c:s mov_text output/video-`date +%Y-%m-%d-%H%M%S`.mp4
