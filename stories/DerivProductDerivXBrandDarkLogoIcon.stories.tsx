import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivXBrandDarkLogoIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivXBrandDarkLogoIcon',
  component: DerivProductDerivXBrandDarkLogoIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivXBrandDarkLogoIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivXBrandDarkLogoIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
