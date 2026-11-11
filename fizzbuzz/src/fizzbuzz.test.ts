import { describe, expect, it } from 'vitest';

import { fizzBuzz } from './fizzBuzz';

describe('fizzbuzz', () => {
  it(' exports fizzBuzz function exists', () => {
    expect(fizzBuzz).toBeDefined();
  });

   it('returns 1 as 1', ()=> {
      expect(fizzBuzz(1)).toBe('1');
   });

   it('returns 2 as 2', () => {
    expect(fizzBuzz(2)).toBe('2');
   });

   it('returns 4 as 4', () => {
    expect(fizzBuzz(4)).toBe('4');
   });
});
