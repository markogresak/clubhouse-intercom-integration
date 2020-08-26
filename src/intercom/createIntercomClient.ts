import Intercom, { Client } from 'intercom-client';

export default function createIntercomClient(): Client {
  if (typeof process.env.INTERCOM_API_TOKEN !== 'string') {
    throw new Error('Missing process.env.INTERCOM_API_TOKEN');
  }

  return new Intercom.Client({ token: process.env.INTERCOM_API_TOKEN });
}
