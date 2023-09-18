import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivXBrandDarkLogoWordmarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivXBrandDarkLogoWordmarkIcon',
  component: DerivProductDerivXBrandDarkLogoWordmarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivXBrandDarkLogoWordmarkIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivXBrandDarkLogoWordmarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
