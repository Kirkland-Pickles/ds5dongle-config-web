import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import { ConfigValidationIssue } from "../../protocol/config";

interface MacAddressControlProps {
  label: string;
  value: string;
  disabled?: boolean;
  issue?: ConfigValidationIssue;
  onChange: (value: string) => void;
}

export function MacAddressControl({ label, value, disabled = false, issue, onChange }: MacAddressControlProps) {
  const { t } = useTranslation();

  return (
    <div className={`control-row ${issue ? "invalid" : ""}`} aria-disabled={disabled}>
      <div>
        <span className="control-label">
          <strong>{label}</strong>
        </span>
        {issue && <small>{t(`validation.${issue.field}`)}</small>}
      </div>
      <Input
        value={value}
        disabled={disabled}
        placeholder="AA:BB:CC:DD:EE:FF"
        maxLength={17}
        inputMode="text"
        autoComplete="off"
        aria-invalid={Boolean(issue)}
        onChange={(event) => onChange(event.currentTarget.value.toUpperCase())}
        className="font-bold"
      />
    </div>
  );
}
