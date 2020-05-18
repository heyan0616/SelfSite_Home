
echo "start cp files from /vue_workspace/vue-home/dist/* to /docker_workspace/nginx_homepage/html"
cp -rf /Users/heyan/self/workspace/vue_workspace/vue-home/dist/* /Users/heyan/self/workspace/docker_workspace/nginx_homepage/html
echo "cp complete"

echo "start scp files from /vue_workspace/vue-home/dist/* to root@heyan.site:/home/nginx_homepage/html"
sshpass -p "Heyan0616" scp -r /Users/heyan/self/workspace/vue_workspace/vue-home/dist/* root@heyan.site:/home/nginx_homepage/html
echo "scp files to server complete"