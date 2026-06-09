import { Input } from "@/components/ui/input";
import { ConfigValidationIssue } from "../../protocol/config";

interface MacAddressControlProps {
  label: string;
  value: string;
  disabled?: boolean;
  issue?: ConfigValidationIssue;
  onChange: (value: string) => void;
}

export function MacAddressControl({ label, value, disabled, issue, onChange }: MacAddressControlProps) {
  return (
    <div className="control-row">
      <label className="control-label">{label}</label>
      <Input
        className={issue ? "input-error" : ""}
        value={value}
        disabled={disabled}
        placeholder="AA:BB:CC:DD:EE:FF"
        maxLength={17}
        onChange={(e) => onChange(e.target.value.toUpperCase())}
      />
    </div>
  );
}