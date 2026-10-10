// Android is live. Set the iOS listing URL when the App Store release is ready.
const env = (
  import.meta as unknown as { env: Record<string, string | undefined> }
).env;
export const config = {
  supportEmail: env.VITE_SUPPORT_EMAIL || "support@secondhandlanka.lk",
  appStoreUrl:
    env.VITE_APP_STORE_URL ||
    "/#download",
  googlePlayUrl:
    env.VITE_GOOGLE_PLAY_URL ||
    "https://play.google.com/store/apps/details?id=lk.secondhand.app",
  hasAppStore: Boolean(env.VITE_APP_STORE_URL),
  hasGooglePlay: true,
};
