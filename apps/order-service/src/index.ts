import Fastify from 'fastify';

const server = Fastify();

server.get('/health', async () => {
  return { status: 'OK' };
});

const start = async () => {
  try {
    await server.listen({ port: 8001 });
    console.log('Order Service is running on port 8001');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();