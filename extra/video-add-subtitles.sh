#!/bin/bash

ffmpeg -i output/video.mp4 \
   -vf subtitles=cc.srt \
   output/video-with-subtitles.mp4
