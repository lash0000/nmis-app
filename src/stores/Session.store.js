import { useEffect, useState } from "react";
import { getCookie } from "./Cookies.store";
import { validateSession } from "./CheckSessionExpiry";

export function useSession() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const valid = validateSession();

    if (!valid) {
      setSession(null);
      setLoading(false);
      return;
    }

    const accessToken = getCookie("accessToken");
    const session_id = getCookie("session_id");
    const device = getCookie("session_device");
    const loginTime = getCookie("session_login_time");
    const flag = getCookie("session_flag");

    if (accessToken && session_id && loginTime && flag) {
      setSession({
        accessToken,
        session_id,
        device,
        loginTime,
        flag
      });
    } else {
      setSession(null);
    }

    setLoading(false);
  }, []);

  return { session, loading };
}
