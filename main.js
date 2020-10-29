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

const endpoint = 'https://jsonplaceholder.typicode.com/todos';

getTodo(endpoint)
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });
