import '..';
import {getConfig} from '@fower/core';

const config = getConfig();

describe('fower-preset-miaoxing', () => {
  test('colors', () => {
    ['primary', 'secondary', 'success', 'danger', 'warning'].forEach(color => {
      expect(config.theme.colors[color + '500']).not.toBeUndefined();
    });
  });
});
