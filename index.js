// 覆盖 @fower/preset-taro 的配置
import '@fower/taro';
import {setConfig} from '@fower/core';

setConfig({
  theme: {
    spacings: {
      0: '0',
      // NOTE: prop 目前不支持小数，CSS 变量支持
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      // NOTE: 暂无 md，先用 base
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    colors: (() => {
      const colors = {
        red50: '#FFECE5',
        red100: '#FFCBB8',
        red200: '#FFA98A',
        red300: '#FF885C',
        red400: '#FF662E',
        red500: '#FF4500',
        red600: '#CC3700',
        red700: '#992900',
        red800: '#661C00',
        red900: '#330E00',
        orange50: '#FFF4E5',
        orange100: '#FFDFB8',
        orange200: '#FFCB8A',
        orange300: '#FFB75C',
        orange400: '#FFA32E',
        orange500: '#FF8E00', // #fb8c00
        orange600: '#CC7200',
        orange700: '#995500',
        orange800: '#663900',
        orange900: '#331C00',
      };

      const levels = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
      levels.forEach(level => {
        colors['brand' + level] = colors['red' + level];
        colors['primary' + level] = colors['red' + level];
        colors['secondary' + level] = colors['orange' + level];
      });

      // @experimental 可能改为其他名称或自动生成
      colors.primaryFg500 = '#FFFFFF';
      colors.secondaryFg500 = '#FFFFFF';

      return colors;
    })(),
  },
});
