FROM node:12

RUN apt update && \
    apt install libnss3 libatk-adaptor libgtk-3-dev psmisc ffmpeg xvfb xdotool -y
