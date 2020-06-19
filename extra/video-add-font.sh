#!/bin/bash

ffmpeg -i output/video.mp4 -vf "drawtext=text='Peregrine CMS':x=(w-text_w)/2:y=(h-text_h)/2:fontsize=24:fontcolor=white" -c:a copy output/video-with-font.mp4

