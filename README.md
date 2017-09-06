super simple example I needed repeatedly to test various docker/host networking things

use env variables
````
CT_PORT
CT_IDENTIFIER
````
to configure a simple hello world style message


````
docker run -d --name node_ct_1 --net host -e CT_PORT=3000 -e CT_IDENTIFIER="hello_world_1" al/node_connection_test
````