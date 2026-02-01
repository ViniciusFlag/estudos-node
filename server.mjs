import { createServer } from "node:http";

const server = createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  
  const url = new URL(req.url || "/", "http://localhost:3000");

  console.log("URL", url);
  
  if (req.method === 'GET' && url.pathname === '/') {
    res.statusCode = 200;
    res.end("Início");
  } else if (req.method === 'POST' && url.pathname === '/produto') {
    res.statusCode = 201;
    res.end("Produto");
  } else {
    res.statusCode = 404;
    res.end("Não encontrado");
  }
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});