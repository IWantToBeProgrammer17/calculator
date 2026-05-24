import { useState } from 'react';
import { Display } from './Display';
import { ButtonGrid } from './ButtonGrid';

interface CalculatorState {
  display: string;
  previousValue: string;
  operation: string | null;
  isNewNumber: boolean;
}

export function Calculator() {
  const [state, setState] = useState<CalculatorState>({
    display: '0',
    previousValue: '',
    operation: null,
    isNewNumber: true,
  });

  const handleNumber = (num: string) => {
    setState((prev) => {
      if (prev.isNewNumber) {
        return {
          ...prev,
          display: num,
          isNewNumber: false,
        };
      }

      // Prevent multiple decimal points
      if (num === '.' && prev.display.includes('.')) {
        return prev;
      }

      // Prevent leading zeros
      if (prev.display === '0' && num !== '.') {
        return {
          ...prev,
          display: num,
        };
      }

      return {
        ...prev,
        display: prev.display + num,
      };
    });
  };

  const handleOperation = (op: string) => {
    setState((prev) => {
      if (prev.operation && !prev.isNewNumber) {
        // Calculate previous operation if exists
        const result = calculate(
          parseFloat(prev.previousValue),
          parseFloat(prev.display),
          prev.operation
        );
        return {
          display: result.toString(),
          previousValue: result.toString(),
          operation: op,
          isNewNumber: true,
        };
      }

      return {
        display: prev.display,
        previousValue: prev.display,
        operation: op,
        isNewNumber: true,
      };
    });
  };

  const handleEquals = () => {
    setState((prev) => {
      if (!prev.operation || prev.isNewNumber) {
        return prev;
      }

      const result = calculate(
        parseFloat(prev.previousValue),
        parseFloat(prev.display),
        prev.operation
      );

      return {
        display: isNaN(result) ? 'Error' : result.toString(),
        previousValue: '',
        operation: null,
        isNewNumber: true,
      };
    });
  };

  const handleDelete = () => {
    setState((prev) => {
      if (prev.isNewNumber) return prev;

      const newDisplay = prev.display.slice(0, -1);
      return {
        ...prev,
        display: newDisplay === '' ? '0' : newDisplay,
        isNewNumber: newDisplay === '',
      };
    });
  };

  const handleClear = () => {
    setState({
      display: '0',
      previousValue: '',
      operation: null,
      isNewNumber: true,
    });
  };

  const handleScientific = (func: string) => {
    setState((prev) => {
      const value = parseFloat(prev.display);
      let result: number;

      switch (func) {
        case '√':
          result = Math.sqrt(value);
          break;
        case '%':
          result = value / 100;
          break;
        default:
          return prev;
      }

      return {
        ...prev,
        display: isNaN(result) ? 'Error' : result.toString(),
        isNewNumber: true,
      };
    });
  };

  const handleButtonClick = (btn: string) => {
    if (btn === '=') {
      handleEquals();
    } else if (['+', '-', '*', '/'].includes(btn)) {
      handleOperation(btn);
    } else {
      handleNumber(btn);
    }
  };

  return (
    <div className="min-h-screen w-full bg-deep-space-blue flex items-center justify-center p-4 md:p-6 lg:p-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 md:mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-flame text-center mb-2">
            Calculator
          </h1>
          <div className="h-1 w-16 bg-blue-green mx-auto rounded-full"></div>
        </div>

        {/* Calculator Container */}
        <div className="bg-deep-space-blue border-2 border-blue-green rounded-2xl p-6 md:p-8 shadow-2xl">
          {/* Display Area */}
          <Display
            value={state.display}
            previousValue={state.previousValue}
            operation={state.operation}
          />

          {/* Button Grid */}
          <ButtonGrid
            onButtonClick={handleButtonClick}
            onClear={handleClear}
            onDelete={handleDelete}
            onScientific={handleScientific}
          />
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center">
          <p className="text-sky-blue-light text-sm md:text-base">
            Scientific Calculator
          </p>
        </div>
      </div>
    </div>
  );
}

function calculate(prev: number, current: number, operation: string): number {
  switch (operation) {
    case '+':
      return prev + current;
    case '-':
      return prev - current;
    case '*':
      return prev * current;
    case '/':
      return current !== 0 ? prev / current : NaN;
    default:
      return current;
  }
}
