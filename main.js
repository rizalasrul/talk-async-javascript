const getTodo = function(callback) {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      callback('HTTP request error', undefined);
    }
  });

  request.open('GET', 'https://jsonplaceholder.typicode.com/todos');

  request.send();
};

console.log('Pernyataan 1');
console.log('Pernyataan 2');

getTodo(function(err, data) {
  console.log('Fungsi callback dijalankan');

  if (err) console.log(err);
  else console.log(data);
});

console.log('Pernyataan 3');
console.log('Pernyataan 4');
