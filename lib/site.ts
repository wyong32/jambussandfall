export const SITE_URL = "https://jambussandfall.org";
export const SITE_NAME = "JamBusSandfall.org";
export const GAME_NAME = "Jam Bus:Sandfall";
export const GAME_DEVELOPER = "Nova Games Technology Limited";
export const APP_STORE_URL = "https://apps.apple.com/us/app/jam-bus-sandfall/id6797530374";
export const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=bus.sand.fall.jam.loop.traffic.flow";
export const DOWNLOAD_COUNT = "100K+";
export const RATING_VALUE = "4.5";
export const RATING_COUNT = "7320";
export const OG_IMAGE = "/images/jam-bus-sandfall-og.webp";
export const LAST_SITE_UPDATE = "2026-11-02T00:00:00+08:00";

export const gameDescription =
  "Jam Bus:Sandfall is a color-matching traffic puzzle. Send each bus along its marked route, collect matching sand, and clear layered pictures without blocking another vehicle.";

export const siteDescription =
  "Find Jam Bus:Sandfall walkthroughs, board screenshots, video solutions, routing tips, and official iOS and Android download links.";

export const gameKeywords = [
  "Jam Bus:Sandfall",
  "Jam Bus:Sandfall walkthrough",
  "Jam Bus:Sandfall level guide",
  "Jam Bus:Sandfall solution",
  "Jam Bus:Sandfall tips",
  "bus traffic puzzle",
  "sandfall puzzle",
  "color matching game",
  "bus route puzzle",
  "Nova Games Technology Limited",
];

export function canonical(path = "/") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const withSlash = cleanPath.endsWith("/") ? cleanPath : `${cleanPath}/`;
  return `${SITE_URL}${withSlash}`;
}
