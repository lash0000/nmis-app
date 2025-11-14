import { deleteCookie, getCookie } from "./Cookies.store";

export function validateSession() {
  const loginTime = getCookie("session_login_time");

  if (!loginTime) return false;

  const sessionAge = Date.now() - Number(loginTime);

  // Session lasts 1 day
  const oneDay = 86400000;

  if (sessionAge > oneDay) {
    deleteCookie("accessToken");
    deleteCookie("session_id");
    deleteCookie("session_device");
    deleteCookie("session_login_time");
    deleteCookie("session_flag");
    return false;
  }

  return true;
}
