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

const buildThead = () => {
  const keysOfBook = Object.keys(books[0]);
  //console.log(keysOfBook);
  const tableHeadBegin = '<thead>';
  const tableHeadEnd = '</thead>';
  const tableTrBegin = '<tr>';
  const tableTrEnd = '</tr>';
  const tableThBegin = '<th>';
  const tableThEnd = '</th>';
  let tableHeadContent = '';
  // build tableHeadContent
  tableHeadContent += tableHeadBegin;
  tableHeadContent += tableTrBegin;
  for (const key of keysOfBook) {
    tableHeadContent += tableThBegin;
    tableHeadContent += key;
    tableHeadContent += tableThEnd;
  }
  tableHeadContent += tableTrEnd;
  tableHeadContent += tableHeadEnd;
  //console.log(`MY THEAD --- ${tableHeadContent}`);
  return tableHeadContent;
};

const buildTbody = () => {
  const tableBodyBegin = '<tbody>';
  const tableBodyEnd = '</tbody>';
  const tableTrBegin = '<tr>';
  const tableTrEnd = '</tr>';
  let tableBodyContent = '';
  // build tableBodyContent
  tableBodyContent += tableBodyBegin;
  for (let i = 0; i < books.length; i++) {
    tableBodyContent += tableTrBegin;
    for (const value in books[i]) {
      tableBodyContent += `<td>${books[i][value]}</td>`;
      //console.log(value, ':', books[i][value]);
    }
    //tableBodyContent += `<td>${book.title}</td><td>${book.language}</td><td>${book.country}</td><td>${book.author}</td><td>test</td>`;
    tableBodyContent += tableTrEnd;
  }
  tableBodyContent += tableBodyEnd;
  return tableBodyContent;
};

const bookShelf = () => {
  const tableBegin = '<table>';
  const tableEnd = '</table>';
  const tableHead = buildThead();
  const tableBody = buildTbody();
  
  //const theadTable = tableHeadBegin + tableTrBegin + tableThBegin + 'test' + tableThEnd + tableTrEnd + tableHeadEnd;
  const allTable = tableBegin + tableHead + tableBody + tableEnd;
  //console.log(`ALL TABLE ---${allTable}`);
  return allTable;
};

module.exports = bookShelf;