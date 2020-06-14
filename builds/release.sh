
echo "start cp files from /vue_workspace/vue-home/dist/* to /docker_workspace/nginx_homepage/html"
rm -rf /Users/heyan/self/workspace/docker_workspace/nginx_homepage/html/*
echo "clean docker html folder complete"
cp -rf /Users/heyan/self/workspace/vue_workspace/vue-home/dist/* /Users/heyan/self/workspace/docker_workspace/nginx_homepage/html
echo "cp file to docker folder complete"

echo "start scp files from /vue_workspace/vue-home/dist/* to root@heyan.site:/home/nginx_homepage/html"
sshpass -p "Heyan0616" ssh root@heyan.site "rm -rf /home/nginx_homepage/html/*"
echo "clean the remote server html folder complete"
sshpass -p "Heyan0616" scp -r /Users/heyan/self/workspace/vue_workspace/vue-home/dist/* root@heyan.site:/home/nginx_homepage/html
echo "start copy downloads folder in remote server"
sshpass -p "Heyan0616" ssh root@heyan.site "cp -r /home/nginx_homepage/downloads/ /home/nginx_homepage/html/"
echo "scp files to server complete"