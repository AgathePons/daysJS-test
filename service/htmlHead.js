const buildCSS = require('./cssInJs');

const buildHead = () => {
  const headOpen = '<head>';
  const headClose = '</head>';
  const headMeta = '<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge">';
  const headTitle = '<title>Document</title>';
  const headContent = headOpen + headMeta + buildCSS() + headClose;
  return headContent;
};

module.exports = buildHead;