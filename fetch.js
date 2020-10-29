fetch('https://jsonplaceholder.typicode.com/todos')
  .then(function(response) {
    console.log('Berhasil: ', response);

    return response.json();
  })
  .then(function(data) {
    console.log('Data: ', data);
  })
  .catch(function(error) {
    console.log('Gagal: ', error);
  });
