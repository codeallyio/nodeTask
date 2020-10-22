if [ ! -d "/data" ] 
then
    sudo mkdir /data
fi

if [ ! -d "/data/db" ] 
then
    sudo mkdir /data/db
fi

sudo mongod --fork --logpath /data/db/mongod.log