import { JevClient, type JevClientOptions } from './client.js';
import { compact } from './compact.js';
import type { CompactOptions, CompactResult, Message } from './types.js';

export type CompactMessagesOptions = CompactOptions & JevClientOptions;

/** `compact` with a `JevClient` built from the options (key from `SYSTEMONE_API_KEY` when one is needed). */
export function compactMessages(
  messages: readonly Message[],
  options: CompactMessagesOptions = {},
): Promise<CompactResult> {
  return compact(messages, new JevClient(options), options);
}
