import React from 'react';

export type ButtonType = 'number' | 'operator' | 'equals' | 'clear' | 'delete' | 'scientific';

interface ButtonProps {
  label: string;
  type: ButtonType;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  type,
  onClick,
  disabled = false,
  className = '',
}) => {
  const getButtonStyle = (): string => {
    const baseStyle =
      'p-3 md:p-4 lg:p-5 rounded-lg font-bold text-lg md:text-xl lg:text-2xl transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-sky-blue-light focus:ring-offset-2 focus:ring-offset-deep-space-blue disabled:opacity-50 disabled:cursor-not-allowed';

    const typeStyles: Record<ButtonType, string> = {
      number: 'bg-sky-blue-light hover:bg-sky-blue-light/80 text-deep-space-blue',
      operator: 'bg-blue-green hover:bg-blue-green/80 text-white',
      equals: 'bg-amber-flame hover:bg-princeton-orange text-deep-space-blue',
      clear: 'bg-red-500 hover:bg-red-600 text-white',
      delete: 'bg-red-500 hover:bg-red-600 text-white',
      scientific: 'bg-blue-green hover:bg-blue-green/80 text-white',
    };

    return `${baseStyle} ${typeStyles[type]} ${className}`;
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={getButtonStyle()}
      aria-label={label}
      type="button"
    >
      {label}
    </button>
  );
};
