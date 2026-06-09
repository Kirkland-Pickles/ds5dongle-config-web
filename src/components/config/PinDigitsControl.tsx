import { useRef } from "react";

interface PinDigitsControlProps {
  label: string;
  value: [number, number, number, number];
  disabled?: boolean;
  onChange: (value: [number, number, number, number]) => void;
}

export function PinDigitsControl({ label, value, disabled, onChange }: PinDigitsControlProps) {
  const ref = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowed = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"];
    if (!allowed.includes(e.key) && !/^\d$/.test(e.key)) {
      e.preventDefault();
    }
    if (/^\d$/.test(e.key) && (ref.current?.value.length ?? 0) >= 4) {
      e.preventDefault();
    }
  };

  const handleBlur = () => {
    const raw = ref.current?.value ?? "";
    const clean = raw.padEnd(4, "0").slice(0, 4);
    onChange([
      parseInt(clean[0]),
      parseInt(clean[1]),
      parseInt(clean[2]),
      parseInt(clean[3]),
    ] as [number, number, number, number]);
  };

  return (
    <div className="control-row">
      <label className="control-label">{label}</label>
      <input
        ref={ref}
        type="text"
        inputMode="numeric"
        maxLength={4}
        defaultValue={value.join("")}
        disabled={disabled}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        placeholder="0000"
        style={{ width: "80px", textAlign: "center", letterSpacing: "6px" }}
      />
    </div>
  );
}