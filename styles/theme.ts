import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    black: '#1e1f1d',
    white: '#ffffff',
    orange: '#eb7952',
  },
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const MIXINS = {
  // flex
  flexBox: (direction = 'row', align = 'center', justify = 'center') => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,

  // positions
  positionCenter: (type = 'absolute') => {
    if (type === 'absolute' || type === 'fixed')
      return `
        position: ${type};
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      `;
    return;
  },
};

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};
