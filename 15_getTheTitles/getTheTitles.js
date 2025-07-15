const getTheTitles = function(books) {
// const books = [
//   {
//     title: 'Book',
//     author: 'Name'
//   },
//   {
//     title: 'Book2',
//     author: 'Name2'
//   }
// ]

// getTheTitles(books) // ['Book','Book2']

// input - arr of dictionaries
// output - arr of book titles
    let titles = books.map(book => book.title);

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
