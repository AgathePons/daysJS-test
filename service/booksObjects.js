const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);
// set fr globally
const localFr = require('dayjs/locale/fr');
dayjs.locale('fr');

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
 * comparison function to compare books.date strings and order book in books
 */
const dateComparison = (a,b) => {
  if (a.date < b.date) {
    return -1;
  }
  if (a.date > b.date) {
    return 1;
  }
  return 0;
}
orderedBooks = books.sort(dateComparison);

/**
 * use dayjs to modify date format in books
 */
const dateFormat = () => {
  for (let i = 0; i < orderedBooks.length; i++) {
    const formatedDate = dayjs(orderedBooks[i].date).format('dddd D MMMM YYYY');
    orderedBooks[i].date = formatedDate;
  }
};

/**
 * calcul the age of the book and add key: value in books for it
 */
const addAgeOfBook = () => {
  for (let i = 0; i < orderedBooks.length; i++) {
    const ageOfBook = dayjs(orderedBooks[i].date).fromNow(true);
    orderedBooks[i].age = ageOfBook;
  }
};
addAgeOfBook();
dateFormat();


module.exports = books;