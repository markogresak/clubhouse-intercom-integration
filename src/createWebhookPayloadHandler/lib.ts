import {
  StoryCommentCreateAction,
  StoryCommentUpdateAction,
  StoryCreateAction,
  StoryUpdateAction,
  WebhookAction,
} from '../types';

export const isStoryCreateAction = (action: WebhookAction): action is StoryCreateAction =>
  action.entity_type === 'story' && action.action === 'create';

export const isStoryUpdateAction = (action: WebhookAction): action is StoryUpdateAction =>
  action.entity_type === 'story' && action.action === 'update';

export const isStoryCommentCreateAction = (
  action: WebhookAction,
): action is StoryCommentCreateAction =>
  action.entity_type === 'story-comment' && action.action === 'create';

export const isStoryCommentUpdateAction = (
  action: WebhookAction,
): action is StoryCommentUpdateAction =>
  action.entity_type === 'story-comment' && action.action === 'update';
