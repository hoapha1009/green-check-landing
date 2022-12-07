interface ChipProps {
  className?: string;
  text: string;
}

export function Chip({ className = '', text = '' }: ChipProps) {
  return (
    <div
      className={`rounded bg-secondary-50 px-4 py-1 text-xs shadow-sm lg:text-sm ${className}`}
    >
      {text}
    </div>
  );
}
