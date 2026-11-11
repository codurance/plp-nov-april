import { describe, expect, it } from 'vitest';

import { fizzBuzz } from './fizzBuzz';

describe('fizzbuzz', () => {



   it.each([ [1, '1'], [2, '2'], [4, '4'] ])('returns %i as %s', (input, expected) => { 
      expect(fizzBuzz(input)).toBe(expected);
   });




});
