interface PinDigitsControlProps {
  label: string;
  azertyLabel: string;
  azertyEnabled: boolean;
  value: [number, number, number, number];
  disabled?: boolean;
  onAzertyChange: (value: boolean) => void;
  onChange: (value: [number, number, number, number]) => void;
}

export function PinDigitsControl({
  label,
  azertyLabel,
  azertyEnabled,
  value,
  disabled,
  onAzertyChange,
  onChange,
}: PinDigitsControlProps) {
  const handleChange = (index: number, raw: string) => {
    const digit = Math.min(9, Math.max(0, parseInt(raw, 10) || 0));
    const next: [number, number, number, number] = [...value] as [number, number, number, number];
    next[index] = digit;
    onChange(next);
  };

  return (
    <div className="control-row" aria-disabled={disabled}>
      <span className="control-label">
        <strong>{label}</strong>
      </span>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-end" }}>
        <div style={{ display: "flex", gap: "6px", justifyContent: "flex-end" }}>
          {value.map((digit, index) => (
            <input
              key={index}
              type="number"
              min={0}
              max={9}
              value={digit}
              disabled={disabled}
              onChange={(event) => handleChange(index, event.target.value)}
              style={{ width: "40px", textAlign: "center" }}
            />
          ))}
        </div>
        <label
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "0.78rem",
            color: disabled ? "var(--muted-foreground)" : "inherit",
            opacity: disabled ? 0.65 : 1,
          }}
        >
          <input
            type="checkbox"
            checked={azertyEnabled}
            disabled={disabled}
            onChange={(event) => onAzertyChange(event.target.checked)}
            style={{ width: "14px", height: "14px" }}
          />
          {azertyLabel}
        </label>
      </div>
    </div>
  );
}
