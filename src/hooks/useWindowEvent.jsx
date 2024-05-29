import { useEffect } from "react";
import { useEvent } from "./useEvent";

export function useWindowEvent(type, cb) {
  const eventCb = useEvent(cb);

  useEffect(() => {
    window.addEventListener(type, eventCb);

    return () => window.removeEventListener(type, eventCb);
  }, [eventCb]);
}
