/**
 * Mathematical Expression Parser and Evaluator
 * Supports: +, -, *, /, parentheses, and operator precedence
 */

export class CalculatorError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CalculatorError';
  }
}

interface Token {
  type: 'number' | 'operator' | 'lparen' | 'rparen';
  value: string;
}

export function evaluateExpression(expression: string): number {
  // Validate input
  if (!expression || expression.trim() === '') {
    throw new CalculatorError('Expression cannot be empty');
  }

  try {
    // Tokenize the expression
    const tokens = tokenize(expression);

    // Parse and evaluate
    const result = parse(tokens);

    // Validate result
    if (isNaN(result) || !isFinite(result)) {
      throw new CalculatorError('Invalid calculation result');
    }

    return result;
  } catch (error) {
    if (error instanceof CalculatorError) {
      throw error;
    }
    throw new CalculatorError('Invalid expression');
  }
}

function tokenize(expression: string): Token[] {
  const tokens: Token[] = [];
  let current = '';

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    // Skip whitespace
    if (/\s/.test(char)) {
      if (current) {
        tokens.push(parseToken(current));
        current = '';
      }
      continue;
    }

    if (/[+\-*/()]/.test(char)) {
      if (current) {
        tokens.push(parseToken(current));
        current = '';
      }

      if (char === '(') {
        tokens.push({ type: 'lparen', value: '(' });
      } else if (char === ')') {
        tokens.push({ type: 'rparen', value: ')' });
      } else {
        tokens.push({ type: 'operator', value: char });
      }
    } else if (/[0-9.]/.test(char)) {
      current += char;
    } else {
      throw new CalculatorError(`Invalid character: ${char}`);
    }
  }

  if (current) {
    tokens.push(parseToken(current));
  }

  return tokens;
}

function parseToken(token: string): Token {
  if (/^[0-9]+\.?[0-9]*$|^[0-9]*\.[0-9]+$/.test(token)) {
    return { type: 'number', value: token };
  }
  throw new CalculatorError(`Invalid token: ${token}`);
}

function parse(tokens: Token[]): number {
  let pos = 0;

  function peek(): Token | undefined {
    return tokens[pos];
  }

  function consume(): Token | undefined {
    return tokens[pos++];
  }

  function parseExpression(): number {
    let result = parseTerm();

    while (peek() && peek()!.type === 'operator' && ['+', '-'].includes(peek()!.value)) {
      const op = consume()!.value;
      const right = parseTerm();

      if (op === '+') {
        result += right;
      } else {
        result -= right;
      }
    }

    return result;
  }

  function parseTerm(): number {
    let result = parseFactor();

    while (peek() && peek()!.type === 'operator' && ['*', '/'].includes(peek()!.value)) {
      const op = consume()!.value;
      const right = parseFactor();

      if (op === '*') {
        result *= right;
      } else {
        if (right === 0) {
          throw new CalculatorError('Division by zero');
        }
        result /= right;
      }
    }

    return result;
  }

  function parseFactor(): number {
    const token = peek();

    if (!token) {
      throw new CalculatorError('Unexpected end of expression');
    }

    if (token.type === 'number') {
      consume();
      const num = parseFloat(token.value);
      if (isNaN(num)) {
        throw new CalculatorError(`Invalid number: ${token.value}`);
      }
      return num;
    }

    if (token.type === 'lparen') {
      consume(); // consume '('
      const result = parseExpression();

      if (peek()?.type !== 'rparen') {
        throw new CalculatorError('Missing closing parenthesis');
      }
      consume(); // consume ')'

      return result;
    }

    throw new CalculatorError(`Unexpected token: ${token.value}`);
  }

  const result = parseExpression();

  if (pos < tokens.length) {
    throw new CalculatorError(`Unexpected token: ${tokens[pos].value}`);
  }

  return result;
}

/**
 * Validate if expression is syntactically correct
 */
export function validateExpression(expression: string): boolean {
  try {
    tokenize(expression);
    return true;
  } catch {
    return false;
  }
}

/**
 * Check for invalid patterns
 */
export function hasInvalidPattern(expression: string): boolean {
  // Multiple operators in a row (except after '(')
  if (/[\+\-\*\/][\+\-\*\/]/.test(expression)) {
    return true;
  }

  // Multiple decimal points in a number
  const numbers = expression.match(/\d+\.\d*\.\d*/g);
  if (numbers && numbers.length > 0) {
    return true;
  }

  // Unmatched parentheses
  let parenCount = 0;
  for (const char of expression) {
    if (char === '(') parenCount++;
    if (char === ')') parenCount--;
    if (parenCount < 0) return true;
  }
  if (parenCount !== 0) return true;

  return false;
}

/**
 * Scientific Functions
 */

/**
 * Power function: base^exponent
 * Supports positive, negative, and decimal exponents
 */
export function power(base: number, exponent: number): number {
  // Handle special cases
  if (base === 0 && exponent < 0) {
    throw new CalculatorError('Cannot raise 0 to a negative power');
  }
  if (base === 0 && exponent === 0) {
    throw new CalculatorError('0^0 is undefined');
  }
  
  const result = Math.pow(base, exponent);
  
  if (!isFinite(result)) {
    throw new CalculatorError('Result is infinite or undefined');
  }
  
  return result;
}

/**
 * Square root function
 */
export function squareRoot(n: number): number {
  if (n < 0) {
    throw new CalculatorError('Cannot calculate square root of negative number');
  }
  return Math.sqrt(n);
}

/**
 * Nth root function: n^(1/root)
 */
export function nthRoot(n: number, root: number): number {
  if (root === 0) {
    throw new CalculatorError('Root cannot be zero');
  }
  
  // For even roots, check for negative numbers
  if (root % 2 === 0 && n < 0) {
    throw new CalculatorError('Cannot calculate even root of negative number');
  }
  
  // Handle negative base with odd root
  const isNegative = n < 0 && root % 2 === 1;
  const absN = Math.abs(n);
  
  const result = Math.pow(absN, 1 / root);
  
  if (!isFinite(result)) {
    throw new CalculatorError('Result is infinite or undefined');
  }
  
  return isNegative ? -result : result;
}

/**
 * Cube root function (special case of nth root)
 */
export function cubeRoot(n: number): number {
  return nthRoot(n, 3);
}

/**
 * Natural logarithm (base e)
 */
export function naturalLog(n: number): number {
  if (n <= 0) {
    throw new CalculatorError('Logarithm of zero or negative number is undefined');
  }
  return Math.log(n);
}

/**
 * Common logarithm (base 10)
 */
export function commonLog(n: number): number {
  if (n <= 0) {
    throw new CalculatorError('Logarithm of zero or negative number is undefined');
  }
  return Math.log10(n);
}

/**
 * Logarithm with custom base
 */
export function logarithm(n: number, base: number = 10): number {
  if (n <= 0) {
    throw new CalculatorError('Logarithm of zero or negative number is undefined');
  }
  if (base <= 0 || base === 1) {
    throw new CalculatorError('Logarithm base must be positive and not equal to 1');
  }
  return Math.log(n) / Math.log(base);
}

/**
 * Factorial function: n!
 */
export function factorial(n: number): number {
  if (n < 0) {
    throw new CalculatorError('Factorial of negative number is undefined');
  }
  if (!Number.isInteger(n)) {
    throw new CalculatorError('Factorial is only defined for integers');
  }
  if (n > 170) {
    throw new CalculatorError('Factorial too large (overflow)');
  }
  
  if (n === 0 || n === 1) {
    return 1;
  }
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  
  return result;
}
