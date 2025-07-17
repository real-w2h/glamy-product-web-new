#!/bin/bash

# setting aws profile
export AWS_PROFILE=quickonline

# ecr login
aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 864285225815.dkr.ecr.ap-south-1.amazonaws.com

VERSION=$1

# docker build
docker build -t glamy-product-web-prod:$VERSION . --platform linux/x86_64

# tagging docker build
docker tag glamy-product-web-prod:$VERSION 864285225815.dkr.ecr.ap-south-1.amazonaws.com/glamy-product-web-prod:$VERSION

docker push 864285225815.dkr.ecr.ap-south-1.amazonaws.com/glamy-product-web-prod:$VERSION