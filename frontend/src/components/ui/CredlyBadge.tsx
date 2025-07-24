import { useEffect, useRef } from "react";

const CREDLY_SCRIPT_ID = "credly-embed-script";

const CredlyBadge = () => {
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!document.getElementById(CREDLY_SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = CREDLY_SCRIPT_ID;
      script.src = "//cdn.credly.com/assets/utilities/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // @ts-ignore
      if (window.CredlyBadge && badgeRef.current) {
        // @ts-ignore
        window.CredlyBadge.renderBadge(badgeRef.current);
      }
    }
  }, []);

  return (
    <div className="flex justify-center items-center p-0">
      <div
        ref={badgeRef}
        data-iframe-width="150"
        data-iframe-height="350"
        data-share-badge-id="530e5d8d-6e4b-4a97-a9ae-127cee9e7dd9"
        data-share-badge-host="https://www.credly.com"
        className="bg-black/80 rounded p-0 m-0"
        style={{ minWidth: 50, minHeight: 100 }}
      />
    </div>
  );
};

export default CredlyBadge;