import { useState, useCallback } from 'react';

export interface CalculatorState {
  display: string;
  previousValue: string;
  operation: string | null;
  isNewNumber: boolean;
}

export const useCalculator = () => {
  const [state, setState] = useState<CalculatorState>({
    display: '0',
    previousValue: '',
    operation: null,
    isNewNumber: true,
  });

  const reset = useCallback(() => {
    setState({
      display: '0',
      previousValue: '',
      operation: null,
      isNewNumber: true,
    });
  }, []);

  const handleNumber = useCallback((num: string) => {
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
  }, []);

  const handleOperation = useCallback((op: string) => {
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
  }, []);

  const handleEquals = useCallback(() => {
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
  }, []);

  const handleDelete = useCallback(() => {
    setState((prev) => {
      if (prev.isNewNumber) return prev;

      const newDisplay = prev.display.slice(0, -1);
      return {
        ...prev,
        display: newDisplay === '' ? '0' : newDisplay,
        isNewNumber: newDisplay === '',
      };
    });
  }, []);

  const handleScientific = useCallback((func: string) => {
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
        case 'sin':
          result = Math.sin((value * Math.PI) / 180);
          break;
        case 'cos':
          result = Math.cos((value * Math.PI) / 180);
          break;
        case 'tan':
          result = Math.tan((value * Math.PI) / 180);
          break;
        case 'log':
          result = Math.log10(value);
          break;
        case 'ln':
          result = Math.log(value);
          break;
        case '1/x':
          result = 1 / value;
          break;
        case 'x²':
          result = value * value;
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
  }, []);

  return {
    display: state.display,
    handleNumber,
    handleOperation,
    handleEquals,
    handleDelete,
    handleScientific,
    reset,
  };
};

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
