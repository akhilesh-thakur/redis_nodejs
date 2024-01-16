const Redis = require('ioredis');

// Connect to the local Redis server (assuming it's running on the default port)
const redis = new Redis();

// Set a key-value pair
redis.set('mykey', 'Hello ioredis!');

// Get the value for the key
redis.get('mykey', function(err, result) {
  if (err) {
    console.error(err);
  } else {
    console.log('Value for mykey:', result);
  }

  // Close the connection to the Redis server
  redis.quit();
});
