// 覆盖 @fower/preset-taro 的配置
import '@fower/taro';
import {addAtom, setConfig, getConfig} from '@fower/core';

const spacing = (size) => {
  if (typeof size === 'string') {
    size = size / 10;
  }
  return (size * 8) + 'rpx';
};

// NOTE: React prop 名称不支持小数，CSS 变量支持，但需转义，两者推荐使用 0 数字开头代替
let spacings = {};
[
  0, 0.5, '05', 1, 1.5, '015', 2, 2.5, '025', 3, 3.5, '035', 4, 5, 6, 7, 8, 9,
  10, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96,
].map(size => {
  spacings[size] = spacing(size);
});

setConfig({
  theme: {
    spacings,
    fontSizes: {
      xs: spacing(3),
      sm: spacing(3.5),
      // NOTE: 暂无 md，先用 base
      base: spacing(4),
      lg: spacing(4.5),
      xl: spacing(5),
      '2xl': spacing(6),
      '3xl': spacing(7.5),
      '4xl': spacing(9),
      '5xl': spacing(12),
      '6xl': spacing(15),
      '7xl': spacing(18),
      '8xl': spacing(24),
      '9xl': spacing(32),
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

      const defaultColors = getConfig().theme.colors;

      const levels = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
      levels.forEach(level => {
        colors['brand' + level] = colors['red' + level];
        colors['primary' + level] = colors['red' + level];
        colors['secondary' + level] = colors['orange' + level];
        colors['success' + level] = defaultColors['green' + level];
        colors['danger' + level] = colors['red' + level];
        colors['warning' + level] = colors['orange' + level];
      });

      // @experimental 可能改为其他名称或自动生成
      colors.primaryFg500 = '#FFFFFF';
      colors.secondaryFg500 = '#FFFFFF';

      return colors;
    })(),
  },
});

// @experimental 考虑移到独立插件
addAtom('truncate2', {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  '-webkit-line-clamp': '2',
  '-webkit-box-orient': 'vertical',
});
