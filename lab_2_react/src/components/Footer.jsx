import { useEffect, useState } from "react";

function Footer() {
  const [systemInfo, setSystemInfo] = useState({
    browser: "",
    platform: "",
  });

  useEffect(() => {
    const info = {
      browser: navigator.userAgent,
      platform: navigator.platform,
    };

    localStorage.setItem("systemInfo", JSON.stringify(info));

    const savedInfo = JSON.parse(localStorage.getItem("systemInfo"));
    setSystemInfo(savedInfo);
  }, []);

  return (
    <footer className="flex flex-col items-center justify-between gap-3 text-sm text-[#827988] sm:flex-row">
      <p>© 2026 Софія Бурдьо</p>

      <p className="font-medium text-[#a48aac]">
        React · Tailwind CSS
      </p>

      <div className="text-center sm:text-right">
        <p><strong>Браузер:</strong> {systemInfo.browser}</p>
        <p><strong>Операційна система:</strong> {systemInfo.platform}</p>
      </div>
    </footer>
  );
}

export default Footer;