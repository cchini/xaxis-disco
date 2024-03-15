export const iconByPlatform = platform => {
  const baseIcon = 'iconXaxis iconXaxis-';
  switch (platform) {
    case 'FACEBOOK':
      return `${baseIcon}facebook-f`;
    case 'INSTAGRAM':
      return `${baseIcon}instagram`;
    case 'MESSENGER':
      return `${baseIcon}facebook-messenger`;
    case 'TIKTOK':
      return `${baseIcon}tiktok`;
    case 'SONA':
      return `${baseIcon}tiktok`;
  }
};
