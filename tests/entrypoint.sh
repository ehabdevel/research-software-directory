#!/usr/bin/env sh

sleep 10

assert_service_available()
{
    if ! nc -z -w1 $1 $2; then
        echo "service $1:$2 not available"
        exit 1
    fi
}

docker ps
docker logs researchsoftwaredirectory_nginx_1
docker logs researchsoftwaredirectory_auth_1

assert_service_available nginx 80
assert_service_available backend 5001
assert_service_available frontend 5004
assert_service_available auth 5002

yarn test