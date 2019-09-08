let http = require('http');
let fs = require('fs');

let typefile = {
    html: {
        mime: 'text/html',
        file: ['index.html']
    },
    css: {
        mime: 'text/css',
        file: ['style.css']
    },
    jpeg: {
        mime: 'image/jpeg',
        file: ['img/48a5c12f166faae847d00987c1ff6f06.jpeg']
    }
}

let serveurdelamort = http.createServer(function(req, res) {
    let mimetype;
    let file;
    if (req.url === '/img/48a5c12f166faae847d00987c1ff6f06.jpeg') {
        mimetype = typefile.jpeg.mime;
        file = typefile.jpeg.file[0];
    } else if (req.url === '/style.css') {
        mimetype = typefile.css.mime;
        file = typefile.css.file[0];
    } else {
        mimetype = typefile.html.mime;
        file = typefile.html.file[0];
    }

    fs.readFile(file, function(err, data) {
        res.writeHead(200, {
            'Content-Type': mimetype
        });
        res.write(data);
        res.end();

    });
});


serveurdelamort.listen(8080);