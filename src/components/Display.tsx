interface DisplayProps {
  value: string;
  error?: string | null;
}

export function Display({ value, error }: DisplayProps) {
  return (
    <div className="w-full bg-deep-space-blue border-2 border-blue-green rounded-lg p-4 md:p-6 mb-4 md:mb-6">
      {/* Error display */}
      {error && (
        <p className="text-red-400 text-sm md:text-base font-medium mb-2 h-6">
          {error}
        </p>
      )}

      {/* Current display */}
      <div className="text-right">
        <p className="text-sky-blue-light text-sm md:text-base font-medium mb-2">
          {error ? 'Error' : 'Result'}
        </p>
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-flame break-words min-h-16 md:min-h-20 flex items-center justify-end overflow-x-auto">
          {value || '0'}
        </div>
      </div>
    </div>
  );
}
