export const getCreatedStoryTemplate = ({ url, name }: { url: string; name: string }): string =>
  `Opened <a href="${url}">${name}</a> with a reference to this issue.

  You'll get another note when the issue is closed.`;

export const getUpdatedStoryTemplate = ({ url, name }: { url: string; name: string }): string =>
  `Commented in <a href="${url}">${name}</a> with a reference to this issue.

  You'll get another note when the issue is closed.`;

export const getCompletedStoryTemplate = ({ url, name }: { url: string; name: string }): string =>
  `The story <a href="${url}">${name}</a> was closed.

  Check the story for updates to share with the client.`;
