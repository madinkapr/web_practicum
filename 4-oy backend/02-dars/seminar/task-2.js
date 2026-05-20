import { createServer } from "http";

const server = createServer(async (req, res) => {

  if (req.method === "GET" && req.url === "/users") {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    let html = "<h1>Users</h1><ul>";

    for (let i = 0; i < users.length; i++) {
      html += `<li>${users[i].name}</li>`;
    }

    html += "</ul>";

    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(html);
  }

});

server.listen(3000, () =>
  console.log("http://localhost:3000/users")
);
