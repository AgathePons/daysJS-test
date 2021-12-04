const dayjs = require('dayjs');
// Séléction de livres incontournables
const books = [{
    title: 'The Fellowship of the Ring',
    language: 'English',
    country: 'United Kingdom',
    author: 'J.R.R. Tolkien',
    date: '1954-07-29'
  },
  {
    title: 'Prelude to foundation',
    language: 'English',
    country: 'United States',
    author: 'Isaac Asimov',
    date: '1988-11-08'
  },
  {
    title: 'Voyage au centre de la terre',
    language: 'Français',
    country: 'France',
    author: 'Jules Verne',
    date: '1864-11-25'
  },
  {
    title: 'La nuit des temps',
    language: 'Français',
    country: 'France',
    author: 'René Barjavel',
    date: '1968-05-20'
  },
  {
    title: 'Carrion Comfort',
    language: 'English',
    country: 'United States',
    author: 'Dan Simmons',
    date: '1989-02-15'
  }
];

/**
 * use dayjs to modify date format in books
 */
const dateFormat = () => {
  for (let i = 0; i < books.length; i++) {
    const formatedDate = dayjs(books[i].date).format('dddd, MMMM D[th] YYYY');
    console.log(formatedDate);
    books[i].date = formatedDate;
  }
};
dateFormat();

/**
 * calcul the age of the book and add key: value in books for it
 */
const addAgeOfBook = () => {
  for (let i = 0; i < books.length; i++) {
    const currentYear = dayjs().year();
    const yearOfBook = parseInt(books[i].date.slice(-4));
    const ageOfTheBook = currentYear - yearOfBook;
    
    books[i].age = `${ageOfTheBook} ans`;
  }
};
addAgeOfBook();

module.exports = books;