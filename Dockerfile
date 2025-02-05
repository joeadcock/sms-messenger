FROM nginx:alpine
COPY dist/sms-messenger/browser /usr/share/nginx/html
COPY config/nginx.conf /etc/nginx/conf.d/default.conf
