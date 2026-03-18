export function UnifiedUiLabel({ strong }: { strong?: boolean }) {
  return (
    <span style={{ fontWeight: strong ? "bold" : "normal" }}>Unified UI</span>
  );
}
