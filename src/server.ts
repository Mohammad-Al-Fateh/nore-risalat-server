import mongoose from 'mongoose';
import app from './app';
import config from './config';
import { Server } from 'http';

let server: Server;

// .catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
  } catch (err) {
    console.log(err);
  }

  server = app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`);
  });
}

main();

process.on('unhandledRejection', () => {
  console.log('unhandledRejection Sutingdown server...');
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('uncaughtException', () => {
  console.log('uncaughtException Sutingdown server...');
  process.exit(1);
});
