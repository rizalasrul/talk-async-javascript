const getTodo = function(endpoint, callback) {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback('HTTP request error', undefined);
    }
  });

  request.open('GET', endpoint);

  request.send();
};

const endpointOne = 'https://jsonplaceholder.typicode.com/todos';
const endpointTwo = 'https://jsonplaceholder.typicode.com/users';
const endpointThree = 'https://jsonplaceholder.typicode.com/posts';

getTodo(endpointOne, function(err, data) {
  console.log(data);

  getTodo(endpointTwo, function(err, data) {
    console.log(data);

    getTodo(endpointThree, function(err, data) {
      console.log(data);
    });
  });
});
