export enum ExternalURL {
  discord,
  twitter,
  notion,
  discourse,
}

export const externalURL = (externalURL: ExternalURL) => {
  switch (externalURL) {
    case ExternalURL.discord:
      return 'http://discord.gg/nounpunks';
    case ExternalURL.twitter:
      return 'https://twitter.com/nunounsdao';
    case ExternalURL.notion:
      return 'https://nunouns.notion.site/Explore-nuNouns-a2a9dceeb1d54e10b9cbf3f931c2266f';
    case ExternalURL.discourse:
      return 'https://discourse.nunouns.wtf/';
  }
};
