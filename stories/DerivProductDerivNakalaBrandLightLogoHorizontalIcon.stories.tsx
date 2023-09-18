import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivNakalaBrandLightLogoHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivNakalaBrandLightLogoHorizontalIcon',
  component: DerivProductDerivNakalaBrandLightLogoHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivNakalaBrandLightLogoHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivNakalaBrandLightLogoHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
