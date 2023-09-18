import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivTraderBrandDarkLogoHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivTraderBrandDarkLogoHorizontalIcon',
  component: DerivProductDerivTraderBrandDarkLogoHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivTraderBrandDarkLogoHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivTraderBrandDarkLogoHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
