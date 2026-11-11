import { describe, expect, it } from 'vitest';

import { fizzBuzz } from './fizzBuzz';

describe('fizzbuzz', () => {
  it(' exports fizzBuzz function exists', () => {

    expect(fizzBuzz).toBeDefined();

  


  });


  
   it('returns 1 as 1', ()=> {
    expect(fizzBuzz(1)).toBe('1');

   }) 



});
