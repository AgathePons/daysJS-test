

const buildCSS = () => {
  const styleOpen = '<style>';
  const styleClose = '</style>';
  const styleContent = `
  body {
    display: flex;
    justify-content: center;
    background-color: gray;
    font-family: sans-serif;
  }
  table {
    background-color: aliceblue;
    border-collapse: collapse;
  }
  table > thead > tr > th {
    padding: 10px;
    text-align: left;
    border: 1px solid black;
    text-transform: capitalize;
  }
  table > tbody > tr > td {
    padding: 10px;
    border: 1px solid black;
  }
  `;
  let cssStyle = styleOpen + styleContent + styleClose;
  return cssStyle;
};

module.exports = buildCSS;