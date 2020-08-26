import createClubhouseClient from './createClubhouseClient';
import createExpressApp from './createExpressApp';
import createIntercomClient from './intercom/createIntercomClient';
import createLogger from './createLogger';
import createWebhookEndpoint from './createWebhookEndpoint';
import createWebhookPayloadHandler from './createWebhookPayloadHandler';
import setupEnv from './setupEnv';
import startWebhookApp from './startWebhookApp';

function run() {
  setupEnv();

  const appPort = Number(process.env.PORT) || 3000;
  const logger = createLogger();
  const app = createExpressApp();
  const clubhouse = createClubhouseClient();
  const intercom = createIntercomClient();
  const handlePayload = createWebhookPayloadHandler(logger);

  createWebhookEndpoint(app, logger, handlePayload);
  startWebhookApp(app, logger, { port: appPort });
}

run();
