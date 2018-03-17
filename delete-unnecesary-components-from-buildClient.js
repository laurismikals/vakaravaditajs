const dir = require('node-dir');
const fs = require('fs');

const isComponent = new RegExp('^00-components');
const directory = `${__dirname}/static/buildClient`;

dir.readFiles(
  directory,
  {
    shortName: true,
  },
  function(err, content, filename, next) {
    if (err) throw err;
    console.log('filename:', filename);

    if (isComponent.test(filename)) {
      fs.unlink(`${directory}/${filename}`, (err) => {
        if (err) throw err;
        console.log('deleted');
      });
    }
    next();
  });
