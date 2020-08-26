import express, { Express } from 'express';

export default function createServer(): Express {
  const app = express();
  app.use(express.json());
  return app;
}
