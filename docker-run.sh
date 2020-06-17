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
