const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
]

const getTheTitles = function(books) {

    let theTitles = [];

    for (let i = 0; i < books.length; i++) {
        theTitles.push(books[i].title);
    }

    return theTitles;
};

// Do not edit below this line
module.exports = getTheTitles;

// The solutions

// const getTheTitles = function (array) {
//     return array.map((book) => book.title);
//   };
  
//   module.exports = getTheTitles;
  