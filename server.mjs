import http from 'node:http';
import { readFile } from 'node:fs/promises';
const files = new Map([
  ['/', ['index.html', 'text/html; charset=utf-8']],
  ['/index.html', ['index.html', 'text/html; charset=utf-8']],
  ['/style.css', ['style.css', 'text/css; charset=utf-8']],
  ['/script.js', ['script.js', 'text/javascript; charset=utf-8']],
  ['/fipec-logo.png', ['fipec-logo.png', 'image/png']],
  ['/fipec-symbol.png', ['fipec-symbol.png', 'image/png']]
]);
const server = http.createServer(async (req, res) => {
  if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405, { Allow: 'GET, HEAD' }); res.end(); return; }
  let path;
  try { path = new URL(req.url, 'http://localhost').pathname; } catch { res.writeHead(400); res.end(); return; }
  if (path === '/health') { res.writeHead(200, { 'Content-Type': 'text/plain' }); res.end(req.method === 'HEAD' ? undefined : 'ok'); return; }
  const file = files.get(path);
  if (!file) { res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); res.end(req.method === 'HEAD' ? undefined : 'Página não encontrada'); return; }
  try {
    const body = await readFile(new URL('./public/' + file[0], import.meta.url));
    res.writeHead(200, { 'Content-Type': file[1], 'Content-Length': body.length, 'X-Content-Type-Options': 'nosniff', 'Cache-Control': 'no-cache' });
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch { res.writeHead(500); res.end(); }
});
server.listen(Number(process.env.PORT || 3000), '0.0.0.0', () => console.log('FIPEC pronta para receber conexões.'));
process.on('SIGTERM', () => server.close(() => process.exit(0)));
