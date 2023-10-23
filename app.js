const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html'; // Default to serving index.html if the URL is "/"
    }

    const contentType = getContentType(filePath);
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('404 Not Found');
            } else {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('Internal Server Error');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

function getContentType(filePath) {
    const extname = path.extname(filePath);
    switch (extname) {
        case '.js':
            return 'application/javascript';
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        default:
            return 'text/plain';
    }
}

const PORT = process.env.CLIENT_PORT || 80;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
