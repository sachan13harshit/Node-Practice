// const fs = require('fs');


// // // to read a file
// // const data = fs.readFileSync('file.txt');
// // // try {
// // //   const data = fs.readFileSync('file.txt', 'utf8');
// // //   console.log('File content:', data);
// // // } catch (err) {
// // //   console.error('Error reading the file:', err);
// // // }


// // console.log('File content:', data);

// // // const write = require('fs');

// // // const content = 'Hello, world!\n';

// // // try {
// // //   write.appendFileSync('file.txt', content, 'utf8');
// // //   console.log('Content has been appended');
// // // } catch (err) {
// // //   console.error('Error appending to the file:', err);
// // // }


// // // to write in a file

// // fs.writeFile('file.txt' , "Hello, world",'utf-8', (err) => {
// //     console.log("Modified");
// // });

// // // to append in a file

// // fs.appendFileSync('file.txt', 'Hello, world!\n', 'utf8', (err) => {
// //     console.log("Appended");
// // }); 


// // // to make a directory


// // fs.mkdir('newDir', (err) => {
// //     if (err) {
// //         console.error('Error creating directory:', err);
// //         return;
// //     }    console.log("Directory created");
// // });

// // // to remove a directory

// // fs.rmdir('newDir', {recursive : true } , (err) => {
// //     if (err) {
// //         return;
// //     }   
// //     console.log("Directory removed");
// // });

// // // to remove a file
// // fs.rename('file.txt', 'newFile.txt', (err) => {
// //     if (err) {
// //         console.error('Error renaming the file:', err);
// //         return;
// //     }
// //     console.log('File renamed');
// // });

// // const p = '/home/user/Desktop/desk/node-pr/index.js';


// const path = require('path');

// // const dirname = path.dirname(p);
// // const extention = path.extname(p);

// // console.log(dirname);
// // console.log(extention);


// const dir1 = '/home/user/Desktop/desk/node-pr/dir1'
// const file = '/home/user/Desktop/desk/node-pr/File.txt'

// const path = require('path');



// // fs.copyFile(file, dir1 + '/File.txt ', (err) => {
// //     if (err) {
// //         return;
// //     }
// //     console.log('File copied');
// // });


// const basename = path.basename(file);


// how to increase the speed of webserver - we use cds content delivery network

// what is the work of webserver - to take the request of the client and send the response to the client


// const http = require('http');

// const server = http.createServer((req, res) => {
//    res.setHeader('Content-Type', 'text/html');
//     res.write('<html><head><title> node js class </title> </head> <body>');
//     res.write('<h1> Hello world </h1>');
//     res.write('</body></html>');   
//     res.end();
// }
// );
// const port = 5678;
// const host = 'localhost';

// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// }
// );

// webpack is serving the 

// i want to serve another html when i hit the url localhost:5678/about

// const http = require('http');
// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.setHeader('Content-Type', 'text/html');
//         res.write('<html><head><title> node js class </title> </head> <body>');
//         res.write('<h1> Hello world </h1>');
//         res.write('</body></html>');
//         res.end();
//     } else if (req.url === '/login') {
//         res.setHeader('Content-Type', 'text/html');
//         res.write('<html><head><title> node js class </title> </head> <body>');
//         res.write('<h1> Hello login </h1>');
//         res.write('</body></html>');
//         res.end();
//     } 
// });
// const port = 5678;
// const host = 'localhost';
// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });


// now i have to serve the html file

const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.end('Error reading the file');
                return;
            }
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
        });
    }
}
);

const port = 5678;
const host = 'localhost';
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
}
);






