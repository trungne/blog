import { DARK_MODE_COOKIE } from "./constant";

const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365; // roughly one year
export const setDarkModeCookie = (isDarkMode: boolean) => {
  if (typeof document === "undefined") {
    return;
  }

  document.cookie = `${DARK_MODE_COOKIE}=${isDarkMode}; max-age=${ONE_YEAR_IN_SECONDS};`;
};
