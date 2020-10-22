# `sudo mongod` default location is /data/db
# we have to be sure it exists

if [ ! -d "/data" ] 
then
    sudo mkdir /data
fi

if [ ! -d "/data/db" ] 
then
    sudo mkdir /data/db
fi

# run `mongod` as admin, to get access to /data/db
# `--fork --logpath /data/db/mongod.log` to run in background

sudo mongod --fork --logpath /data/db/mongod.log