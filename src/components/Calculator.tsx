import { useState, useEffect } from 'react';
import { Display } from './Display';
import { ButtonGrid } from './ButtonGrid';
import { evaluateExpression, CalculatorError, squareRoot, cubeRoot, naturalLog, commonLog, factorial } from '../utils/calculator';

interface CalculatorState {
  display: string;
  error: string | null;
}

export function Calculator() {
  const [state, setState] = useState<CalculatorState>({
    display: '0',
    error: null,
  });

  // Keyboard support
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key;

      // Numbers and operators
      if (/^[0-9+\-*/().=]$/.test(key)) {
        e.preventDefault();
        handleButtonClick(key);
      }
      // Enter for equals
      else if (key === 'Enter') {
        e.preventDefault();
        handleEquals();
      }
      // Backspace for delete
      else if (key === 'Backspace') {
        e.preventDefault();
        handleDelete();
      }
      // Escape for clear
      else if (key === 'Escape') {
        e.preventDefault();
        handleClear();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [state]);

  const handleNumber = (num: string) => {
    setState((prev) => {
      // Reset if showing error
      if (prev.error) {
        return {
          display: num,
          error: null,
        };
      }

      // Prevent multiple decimal points in same number
      if (num === '.') {
        const lastNumber = prev.display.split(/[+\-*/()]/).pop() || '';
        if (lastNumber.includes('.')) {
          return prev;
        }
        // Allow decimal to append to 0
        if (prev.display === '0') {
          return {
            display: '0.',
            error: null,
          };
        }
      }

      // Replace leading 0 with new character (except for decimal point)
      if (prev.display === '0' && num !== '.') {
        return {
          display: num,
          error: null,
        };
      }

      return {
        display: prev.display + num,
        error: null,
      };
    });
  };

  const handleDelete = () => {
    setState((prev) => {
      if (prev.error) return prev;

      const newDisplay = prev.display.slice(0, -1);
      return {
        display: newDisplay === '' ? '0' : newDisplay,
        error: null,
      };
    });
  };

  const handleClear = () => {
    setState({
      display: '0',
      error: null,
    });
  };

  const handleEquals = () => {
    setState((prev) => {
      if (prev.error) return prev;

      try {
        const result = evaluateExpression(prev.display);
        // Round to avoid floating point errors
        const rounded = Math.round(result * 1e10) / 1e10;

        return {
          display: rounded.toString(),
          error: null,
        };
      } catch (error) {
        const errorMsg =
          error instanceof CalculatorError ? error.message : 'Invalid expression';
        return {
          display: prev.display,
          error: errorMsg,
        };
      }
    });
  };

  const handleScientific = (func: string) => {
    setState((prev) => {
      try {
        const value = parseFloat(prev.display);
        let result: number;

        switch (func) {
          // Root functions
          case '√':
            result = squareRoot(value);
            break;
          case '∛':
            result = cubeRoot(value);
            break;
          case '%':
            result = value / 100;
            break;
          
          // Trigonometric functions (in degrees)
          case 'sin':
            result = Math.sin((value * Math.PI) / 180);
            break;
          case 'cos':
            result = Math.cos((value * Math.PI) / 180);
            break;
          case 'tan':
            result = Math.tan((value * Math.PI) / 180);
            break;
          
          // Logarithmic functions
          case 'ln':
            result = naturalLog(value);
            break;
          case 'log':
            result = commonLog(value);
            break;
          
          // Factorial
          case '!':
            result = factorial(value);
            break;
          
          default:
            return prev;
        }

        const rounded = Math.round(result * 1e10) / 1e10;
        return {
          display: isNaN(rounded) ? 'Error' : rounded.toString(),
          error: null,
        };
      } catch (error) {
        const errorMsg = error instanceof CalculatorError ? error.message : 'Invalid calculation';
        return {
          display: prev.display,
          error: errorMsg,
        };
      }
    });
  };

  const handleButtonClick = (btn: string) => {
    if (btn === '=') {
      handleEquals();
    } else if (['+', '-', '*', '/', '(', ')'].includes(btn)) {
      handleNumber(btn);
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
          <Display value={state.display} error={state.error} />

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
          <p className="text-sky-blue-light/50 text-xs mt-2">
            Keyboard: Numbers, +−*/ Enter=Calculate Backspace=Delete Esc=Clear
          </p>
        </div>
      </div>
    </div>
  );
}
