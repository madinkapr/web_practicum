import { createServer } from 'http';
import { addData, getData } from './file.js';

const PORT = 3000;
const contentType = { "content-type": "application/json" };

const server = createServer(async (req, res) => {
    // READ (get)
    if (req.method === 'GET' && req.url === "/students") {
        const students = await getData()
        res.writeHead(200, contentType);
        return res.end(JSON.stringify(students))
    }

    // READ (by id)
    if (req.method === "GET" && req.url.startsWith('/students/')) {
        const id = Number(req.url.split('/')[2]);
        const students = await getData();
        const student = students.find(student => student.id === id);
        if (!student) {
            res.writeHead(404, contentType);
            return res.end(JSON.stringify({
                message: "Student not found"
            }))
        }
        res.writeHead(200, contentType);
        return res.end(JSON.stringify(student))
    }

    //CREATE (post)
    if (req.method === "POST" && req.url === "/students") {
        let body = '';
        const students = await getData();

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', async () => {
            const id = students.length ? students.at(-1)?.id + 1 : 1;
            const newStudent = { id, ...JSON.parse(body) };
            students.push(newStudent)
            await addData(students);

            res.writeHead(201, contentType);
            return res.end(JSON.stringify(newStudent));
        })
    }

    //UPDATE (put)
    if (req.method === 'PUT' && req.url.startsWith('/students/')) {
        const id = Number(req.url.split('/')[2]);
        const students = await getData();
        const index = students.findIndex(item => item.id === id);
        if (index === -1) {
            res.writeHead(404, contentType);
            return res.end(JSON.stringify({
                message: 'Student not found'
            }))
        }

        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', async () => {
            students[index] = { id, ...JSON.parse(body) };
            await addData(students)

            res.writeHead(200, contentType);
            return res.end(JSON.stringify(students[index]));
        })
    }

    //DELETE
    if (req.method === 'DELETE' && req.url.startsWith('/students/')) {
        const id = Number(req.url.split('/')[2]);
        const students = await getData();
        const index = students.findIndex(item => item.id === id);
        if (index === -1) {
            res.writeHead(404, contentType);
            return res.end(JSON.stringify({
                message: 'Student not found'
            }))
        }

        students.splice(index,1);
        await addData(students);

        res.writeHead(200, contentType);
        return res.end(JSON.stringify({}))
    }
});

server.listen(PORT, () => console.log('Server running on', PORT))