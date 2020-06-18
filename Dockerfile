FROM node:12

RUN apt update && \
    apt install libnss3 libatk-adaptor ffmpeg xvfb -y
RUN apt install libgtk-3-dev -y
RUN apt install psmisc -y
