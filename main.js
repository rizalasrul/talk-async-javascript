const getTodo = function(endpoint) {
  return new Promise(function(resolve, reject) {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject('HTTP request error');
      }
    });

    request.open('GET', endpoint);

    request.send();
  });
};

const endpointOne = 'https://jsonplaceholder.typicode.com/todos';
const endpointTwo = 'https://jsonplaceholder.typicode.com/users';
const endpointThree = 'https://jsonplaceholder.typicode.com/posts';

getTodo(endpointOne)
  .then(function(data) {
    console.log('Promise 1 berhasil: ', data);
    return getTodo(endpointTwo);
  })
  .then(function(data) {
    console.log('Promise 2 berhasil: ', data);
    return getTodo(endpointThree);
  })
  .then(function(data) {
    console.log('Promise 3 berhasil: ', data);
  })
  .catch(function(error) {
    console.log('Promise gagal: ', error);
  });
