const books = require('./booksObjects');
/**
 * build thead of the bookShelf table with th for each key of books
 * @returns {string} the entire html for thead
 */
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
  return tableHeadContent;
};

/**
 * build thbody of the bookShelf table with tr for each books and th for each key of books
 * @returns {string} the entire html for tbody
 */
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
    tableBodyContent += tableTrEnd;
  }
  tableBodyContent += tableBodyEnd;
  return tableBodyContent;
};

/**
 * build the bookShelf table with thead + tbody
 * @returns {string} the entire html for the bookShelf table
 */
const bookShelf = () => {
  const tableBegin = '<table>';
  const tableEnd = '</table>';
  const tableHead = buildThead();
  const tableBody = buildTbody();
  const allTable = tableBegin + tableHead + tableBody + tableEnd;
  return allTable;
};

module.exports = bookShelf;