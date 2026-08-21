"use client";

import { useEffect, useState } from "react";

export default function CrtEntry({ children }: { children: React.ReactNode }) {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const enterSite = (event: MessageEvent) => {
      if (event.data === "crt-enter-site") setEntered(true);
    };
    window.addEventListener("message", enterSite);
    return () => window.removeEventListener("message", enterSite);
  }, []);

  return (
    <>
      {children}
      {!entered && (
        <section className="crt-entry" aria-label="Site introduction">
          <iframe className="crt-entry-frame" src="/crt-intro/index.html" title="Sahil Wadhwa CRT introduction" />
        </section>
      )}
    </>
  );
}
