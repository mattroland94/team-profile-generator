const fs = require('fs');

function write(html) {
    fs.write('./dist/index.html', html, err => {
        if(err) {
            throw err
        }
        console.log("index.html Page generated")
        stylecopy()
    })
}

const stylecopy = () => {
    fs.filecopy('./src/style.css', './dist/style.css', err => {
        if (err) {
            throw err
        }
        console.log('style.css file copied')
    });
}

module.exports = write, stylecopy