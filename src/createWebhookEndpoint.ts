import { Express } from 'express';
import { Logger } from 'winston';
import { WebhookPayload } from './types';

const isValidWebhookPayload = (payload: any): payload is WebhookPayload =>
  payload.id !== undefined && Array.isArray(payload.actions);

export default function createWebhookEndpoint(
  app: Express,
  logger: Logger,
  handler: (payload: WebhookPayload) => void,
): void {
  app.post('/webhook', (request, response) => {
    const { body } = request;

    if (!isValidWebhookPayload(body)) {
      response.sendStatus(400);
      response.end();
      return;
    }

    handler(body);
    response.sendStatus(200);
  });
}
