

export type SocialLink = {
  platform:
    | "facebook"
    | "twitter"
    | "instagram"
    | "linkedin"
    | "youtube"
    | "tiktok";
  url: string;
  previewImage?: string;
};

export const getSocialLinks = (_accountIdArg?: bigint): SocialLink[] => {
  return [{
  "platform": "facebook",
  "url": "https://www.facebook.com/Vidal-Servicios-Inmobiliarios-300047960706636/",
  "previewImage": undefined
}, {
  "platform": "instagram",
  "url": "https://www.instagram.com/vidal_servicios_inmobiliarios/",
  "previewImage": undefined
}];
}