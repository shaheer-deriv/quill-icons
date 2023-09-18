import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivXBrandLightLogoIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivXBrandLightLogoIcon',
  component: DerivProductDerivXBrandLightLogoIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivXBrandLightLogoIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivXBrandLightLogoIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
