import http from 'http';

const port = 3000;

let products = [
    { 
        id: 1,
        name: 'chocolate cake',
        donor: 'fulano',
        category: 'alimentary',
        unit_price: 23,
        description: 'A delicious cake made with love', 
        image: 'link_to_image'
    },
    { 
        id: 2,
        name: 'breuzinho',
        donor: 'fulano',
        category: 'aromatherapy',
        unit_price: 15,
        description: 'It promotes the mental concentration', 
        image: 'link_to_image2'
    }
];

const requestListener = (req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Olá Mundo!</h1>');

    } else if (req.url === '/products' && req.method === 'GET') {

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(products));

    } else if (req.url === '/products' && req.method === 'POST') {

        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            const newProduct = JSON.parse(body);
            products.push(newProduct);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(newProduct));
        });

    } else { 
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
};

const server = http.createServer(requestListener);

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
});
