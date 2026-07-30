import { GitBranch } from "lucide-react";
import { useTranslation } from "react-i18next";

export function AppFooter() {
  const { t } = useTranslation();

  return (
    <footer className="app-footer" aria-label="Page footer">
      <div className="footer-copy">
        <strong>{t("footer.title")}</strong>
        <span>{t("footer.description")}</span>
      </div>
      <a className="footer-link" href="https://github.com/Kirkland-Pickles/DS5Dongle-windows-htpc/releases" target="_blank" rel="noopener noreferrer">
        <GitBranch size={16} />
        Download Firmware
      </a>
    </footer>
  );
}
