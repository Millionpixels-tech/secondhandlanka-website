// Replace these sample store links with the app's real listing URLs at launch.
const env = (
  import.meta as unknown as { env: Record<string, string | undefined> }
).env;
export const config = {
  supportEmail: env.VITE_SUPPORT_EMAIL || "support@secondhandlanka.lk",
  appStoreUrl:
    env.VITE_APP_STORE_URL ||
    "https://apps.apple.com/lk/app/secondhand-lanka/id0000000000",
  googlePlayUrl:
    env.VITE_GOOGLE_PLAY_URL ||
    "https://play.google.com/store/apps/details?id=lk.secondhand.app",
  hasAppStore: Boolean(env.VITE_APP_STORE_URL),
  hasGooglePlay: Boolean(env.VITE_GOOGLE_PLAY_URL),
};
