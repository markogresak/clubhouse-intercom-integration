import { Client } from 'intercom-client';

export default async function postNote(
  client: Client,
  { conversationId, note }: { conversationId: number; note: string },
): Promise<void> {
  // TODO: figure out how to send the note with Intercom v2. Perhaps the typings are not 100% correct?
}
