import Clubhouse from 'clubhouse-lib';

export default function createClubhouseClient(): Clubhouse<any, any> {
  if (typeof process.env.CLUBHOUSE_API_TOKEN !== 'string') {
    throw new Error('Missing process.env.CLUBHOUSE_API_TOKEN');
  }

  return Clubhouse.create(process.env.CLUBHOUSE_API_TOKEN);
}
