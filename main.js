const getTodo = function(callback) {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback('HTTP request error', undefined);
    }
  });

  request.open('GET', 'https://jsonplaceholder.typicode.com/todos');

  request.send();
};

getTodo(function(err, data) {
  console.log('Fungsi callback dijalankan');

  if (err) console.log(err);
  else console.log(data);
});

