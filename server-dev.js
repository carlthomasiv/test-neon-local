import fs from 'fs';
import express from 'express';
import { createServer } from 'vite';

const app = express();

const vite = await createServer({
  server: {
    middlewareMode: true,
  },
  appType: 'custom',
});

app.use(vite.middlewares);

app.use('*', async (req, res) => {
  const url = req.originalUrl;

  try {
    const template = await vite.transformIndexHtml(url, fs.readFileSync('index.html', 'utf-8'));
    const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');

    const { getServerData } = await vite.ssrLoadModule('/src/function.js');
    const data = await getServerData();
    const script = `<script>window.__data__=${JSON.stringify(data)}</script>`;

    const html = template.replace(`<!--outlet-->`, `${render(data)} ${script}`);
    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  } catch (error) {
    res.status(500).end(error);
  }
});

// app.listen(4173, () => {
//   console.log('http://localhost:4173.');
// });

const PORT = 4173;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
