interface DisplayProps {
  value: string;
  previousValue?: string;
  operation?: string | null;
}

export function Display({ value, previousValue, operation }: DisplayProps) {
  return (
    <div className="w-full bg-deep-space-blue border-2 border-blue-green rounded-lg p-4 md:p-6 mb-4 md:mb-6">
      {/* Previous operation display */}
      {previousValue && operation && (
        <p className="text-sky-blue-light text-sm md:text-base font-medium mb-2 opacity-75">
          {previousValue} {operation}
        </p>
      )}

      {/* Current display */}
      <div className="text-right">
        <p className="text-sky-blue-light text-sm md:text-base font-medium mb-2">
          {previousValue && operation ? 'Input' : 'Result'}
        </p>
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-flame break-words min-h-16 md:min-h-20 flex items-center justify-end overflow-x-auto">
          {value || '0'}
        </div>
      </div>
    </div>
  );
}
