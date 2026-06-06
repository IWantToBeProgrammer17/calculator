import { Button } from './Button';
import type { ButtonType } from './Button';

interface ButtonGridProps {
  onButtonClick: (value: string) => void;
  onClear: () => void;
  onDelete: () => void;
  onScientific?: (func: string) => void;
}

interface GridButton {
  label: string;
  value: string;
  type: ButtonType;
}

const buttons: GridButton[] = [
  { label: '7', value: '7', type: 'number' },
  { label: '8', value: '8', type: 'number' },
  { label: '9', value: '9', type: 'number' },
  { label: '/', value: '/', type: 'operator' },
  { label: '4', value: '4', type: 'number' },
  { label: '5', value: '5', type: 'number' },
  { label: '6', value: '6', type: 'number' },
  { label: '*', value: '*', type: 'operator' },
  { label: '1', value: '1', type: 'number' },
  { label: '2', value: '2', type: 'number' },
  { label: '3', value: '3', type: 'number' },
  { label: '-', value: '-', type: 'operator' },
  { label: '0', value: '0', type: 'number' },
  { label: '.', value: '.', type: 'number' },
  { label: '=', value: '=', type: 'equals' },
  { label: '+', value: '+', type: 'operator' },
];

const scientificButtons: GridButton[] = [
  { label: 'C', value: 'C', type: 'clear' },
  { label: 'DEL', value: 'DEL', type: 'delete' },
  { label: '(', value: '(', type: 'scientific' },
  { label: ')', value: ')', type: 'scientific' },
];

const scienceFunctionButtons: GridButton[] = [
  { label: '√', value: '√', type: 'scientific' },
  { label: '∛', value: '∛', type: 'scientific' },
  { label: 'ln', value: 'ln', type: 'scientific' },
  { label: 'log', value: 'log', type: 'scientific' },
];

const advancedFunctionButtons: GridButton[] = [
  { label: 'sin', value: 'sin', type: 'scientific' },
  { label: 'cos', value: 'cos', type: 'scientific' },
  { label: 'tan', value: 'tan', type: 'scientific' },
  { label: '%', value: '%', type: 'scientific' },
];

export function ButtonGrid({
  onButtonClick,
  onClear,
  onDelete,
  onScientific,
}: ButtonGridProps) {
  const handleClick = (btn: GridButton) => {
    if (btn.value === 'C') {
      onClear();
    } else if (btn.value === 'DEL') {
      onDelete();
    } else if (['√', '∛', '%', 'sin', 'cos', 'tan', 'ln', 'log', '!'].includes(btn.value) && onScientific) {
      // Call onScientific for all scientific functions
      onScientific(btn.value);
    } else {
      // Everything else (numbers, operators, parentheses)
      onButtonClick(btn.value);
    }
  };

  return (
    <div className="w-full space-y-3 md:space-y-4">
      {/* Control buttons row */}
      <div className="grid grid-cols-4 gap-2 md:gap-3 lg:gap-4">
        {scientificButtons.map((btn) => (
          <Button
            key={btn.value}
            label={btn.label}
            type={btn.type}
            onClick={() => handleClick(btn)}
          />
        ))}
      </div>

      {/* Science functions row 1 */}
      <div className="grid grid-cols-4 gap-2 md:gap-3 lg:gap-4">
        {scienceFunctionButtons.map((btn) => (
          <Button
            key={btn.value}
            label={btn.label}
            type={btn.type}
            onClick={() => handleClick(btn)}
          />
        ))}
      </div>

      {/* Science functions row 2 */}
      <div className="grid grid-cols-4 gap-2 md:gap-3 lg:gap-4">
        {advancedFunctionButtons.map((btn) => (
          <Button
            key={btn.value}
            label={btn.label}
            type={btn.type}
            onClick={() => handleClick(btn)}
          />
        ))}
      </div>

      {/* Main calculator grid */}
      <div className="grid grid-cols-4 gap-2 md:gap-3 lg:gap-4">
        {buttons.map((btn) => (
          <Button
            key={btn.value}
            label={btn.label}
            type={btn.type}
            onClick={() => handleClick(btn)}
          />
        ))}
      </div>
    </div>
  );
}
