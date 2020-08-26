import { Express } from 'express';
import { Logger } from 'winston';

export default function startWebhookApp(
  app: Express,
  logger: Logger,
  { port }: { port: number },
): void {
  app.listen(port, () => {
    logger.info(`Listening on port ${port}`);
  });
}
