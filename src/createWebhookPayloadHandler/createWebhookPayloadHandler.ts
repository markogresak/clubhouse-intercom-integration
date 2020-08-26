import { Logger } from 'winston';
import { WebhookPayload } from '../types';

export default function createWebhookPayloadHandler(logger: Logger) {
  return (payload: WebhookPayload) => {
    if (process.env.NODE_ENV === 'development') {
      logger.info(payload);
    }
  };
}
