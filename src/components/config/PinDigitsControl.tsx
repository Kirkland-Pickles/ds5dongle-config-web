interface PinDigitsControlProps {
  label: string;
  value: [number, number, number, number];
  disabled?: boolean;
  onChange: (value: [number, number, number, number]) => void;
}
export function PinDigitsControl({ label, value, disabled, onChange }: PinDigitsControlProps) {
  const handleChange = (index: number, raw: string) => {
    const digit = Math.min(9, Math.max(0, parseInt(raw) || 0));
    const next: [number, number, number, number] = [...value] as [number, number, number, number];
    next[index] = digit;
    onChange(next);
  };
  return (
    <div className="control-row">
      <label className="control-label">{label}</label>
      <div style={{ display: "flex", gap: "6px" }}>
        {value.map((digit, i) => (
          <input
            key={i}
            type="number"
            min={0}
            max={9}
            value={digit}
            disabled={disabled}
            onChange={(e) => handleChange(i, e.target.value)}
            style={{ width: "40px", textAlign: "center" }}
          />
        ))}
      </div>
    </div>
  );
}