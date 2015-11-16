AWS SDK examples for AWS certification

set up NodeJS by adding EPEL repository via curl, then yum install. Type the following commands in terminal,

curl --silent --location https://rpm.nodesource.com/setup | bash -
yum install nodejs npm git -y


Once nodejs is set up, clone the project

git clone https://github.com/barryku/aws-cert.git

Change directory to aws-cert, and install AWS SDK

cd aws-cert
npm install

Copy config.txt to config.json, and change its content to match your env.

cp config.txt config.json

You can then run the sample scripts as followed,
cd dynamo
node create-db.js
node upload-data.js
