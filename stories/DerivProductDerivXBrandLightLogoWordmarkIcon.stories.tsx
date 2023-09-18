import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivXBrandLightLogoWordmarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivXBrandLightLogoWordmarkIcon',
  component: DerivProductDerivXBrandLightLogoWordmarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivXBrandLightLogoWordmarkIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivXBrandLightLogoWordmarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
