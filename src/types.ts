import { Comment as StoryComment, StoryType, Story } from 'clubhouse-lib';

interface Changeset<V> {
  new: V;
  old: V;
}

interface Action {
  id: number | string;

  action: 'create' | 'update';
  entity_type: 'story' | 'story-comment' /* TODO: document other entities */;
}

export interface StoryCreateAction extends Action {
  entity_type: 'story';
  action: 'create';

  app_url: string;
  name: string;
  story_type: StoryType;
}

export interface StoryUpdateAction extends Action {
  entity_type: 'story';
  action: 'update';

  app_url: string;
  name: string;
  story_type: StoryType;

  /**
   * Describing which key changed (old -> new) or which key was added.
   * NOTE: Declaring only the relevant keys, there might be other values.
   */
  changes?: {
    comment_ids?: { adds: StoryComment['id'][] };
    completed?: Changeset<Story['completed']>;
  };
}

export interface StoryCommentCreateAction extends Action {
  entity_type: 'story-comment';
  action: 'create';

  /** UUID */
  author_id: string;
  text: string;
}

export interface StoryCommentUpdateAction extends Action {
  entity_type: 'story-comment';
  action: 'update';

  author_id: string;
  text: string;
  story_id: Story['id'];

  changes?: { text: Changeset<string> };
}

export type WebhookAction =
  | StoryCreateAction
  | StoryUpdateAction
  | StoryCommentCreateAction
  | StoryCommentUpdateAction;

export interface WebhookPayload {
  /** UUID */
  id: string;
  /** Changed entity id */
  primary_id: Action['id'];

  /** Date in ISO 8601 format */
  changed_at: string;
  /** UUID, not sure what it represents */
  member_id: string;
  /** Clubhouse Webhook API version */
  version: string;

  actions: WebhookAction[];
}
