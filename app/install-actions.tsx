"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Platform = "android" | "ios" | "desktop";

export function InstallActions({ androidApk, studentApp, placement }: { androidApk?: string; studentApp: string; placement: "hero" | "install" }) {
  const [platform, setPlatform] = useState<Platform>("desktop");
  const [showIosGuide, setShowIosGuide] = useState(false);

  useEffect(() => {
    const agent = navigator.userAgent.toLowerCase();
    setPlatform(/iphone|ipad|ipod/.test(agent) ? "ios" : /android/.test(agent) ? "android" : "desktop");
  }, []);

  const primaryClass = placement === "install" ? "button button-light" : "button button-primary";
  const secondaryClass = "button button-glass";

  return <>
    <div className={placement === "install" ? "install-actions" : "hero-actions"}>
      {platform === "android" ? <>
        {androidApk ? <a className={primaryClass} href={androidApk} download>Download Android app <span>↓</span></a> : <a className={primaryClass} href={studentApp}>Install OG Vibes <span>↗</span></a>}
        <a className={secondaryClass} href={studentApp}>Open student app</a>
      </> : platform === "ios" ? <>
        <button className={primaryClass} type="button" onClick={() => setShowIosGuide(true)}>Install OG Vibes <span>＋</span></button>
        <a className={secondaryClass} href={studentApp}>Open student app</a>
      </> : <>
        <a className={primaryClass} href={studentApp}>Open student app <span>↗</span></a>
        {androidApk ? <a className={secondaryClass} href={androidApk} download>Download Android APK</a> : <span className={`${secondaryClass} button-disabled`} aria-disabled="true">Android APK coming soon</span>}
        <button className={secondaryClass} type="button" onClick={() => setShowIosGuide(true)}>Install on iPhone</button>
      </>}
    </div>
    {showIosGuide ? <div className="install-modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setShowIosGuide(false)}><section className="install-modal" role="dialog" aria-modal="true" aria-labelledby="ios-install-title"><button className="modal-close" type="button" onClick={() => setShowIosGuide(false)} aria-label="Close installation guide">×</button><div className="modal-app-icon"><Image src="/brand/logo.png" width={68} height={68} alt="" /></div><p className="eyebrow dark"><span /> iPhone installation</p><h2 id="ios-install-title">Add OG Vibes to your Home Screen</h2><ol><li><span>1</span><p>Open the student app in <strong>Safari</strong>.</p></li><li><span>2</span><p>Tap the <strong>Share</strong> button at the bottom of Safari.</p></li><li><span>3</span><p>Choose <strong>Add to Home Screen</strong>, then tap <strong>Add</strong>.</p></li></ol><a className="button button-primary" href={`${studentApp}&platform=ios`}>Open in Safari <span>↗</span></a></section></div> : null}
  </>;
}
