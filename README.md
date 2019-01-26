# Over The Top Fibonacci
An over-the-top complicated micro-service dockerized approach to solving the Fibonacci Problem.

It uses React as its frontend, Express for its server and Node.js for the computation. Also, adding in Postgres and Redis to store values and indices. Finally, dockerizing individual containers and orchestrating them to work together.

Nginx is used as a proxy handler, to manage all the routes across multiples services.
