import server from './server';

const { PORT = 3000 } = process.env;

server.listen(PORT, () => console.log(`Server listening on PORT:${PORT}`));
