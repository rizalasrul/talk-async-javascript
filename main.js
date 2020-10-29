const getTodo = async function() {
  try {
    const responseOne = await fetch('https://jsonplaceholder.typicode.com/todos');
    const dataOne = await responseOne.json();
    console.log(dataOne);

    const responseTwo = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataTwo = await responseTwo.json();
    console.log(dataTwo);

    const responseThree = await fetch('https://jsonplaceholder.typicode.com/posts');
    const dataThree = await responseThree.json();
    console.log(dataThree);
  }
  catch (e) {
    console.log(e);
  }
};

getTodo();
