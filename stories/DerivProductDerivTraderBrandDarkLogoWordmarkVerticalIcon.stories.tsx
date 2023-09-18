import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivTraderBrandDarkLogoWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivTraderBrandDarkLogoWordmarkVerticalIcon',
  component: DerivProductDerivTraderBrandDarkLogoWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivTraderBrandDarkLogoWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivTraderBrandDarkLogoWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
