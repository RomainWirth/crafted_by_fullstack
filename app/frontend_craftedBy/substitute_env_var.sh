#!/bin/sh
ROOT_DIR=/usr/share/nginx/html
# Replace env vars in files served by NGINX
for file in  $ROOT_DIR/assets/*.js* $ROOT_DIR/index.html;

do  
sed -i 's|VITE_API_ENDPOINT_PLACEHOLDER|'${VITE_BASE_API_URL}'|g' $file
# Your other variables here...
done

# Let container exectution proceed
exec "$@"