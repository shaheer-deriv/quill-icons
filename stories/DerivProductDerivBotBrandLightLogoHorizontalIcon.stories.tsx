import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivBotBrandLightLogoHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivBotBrandLightLogoHorizontalIcon',
  component: DerivProductDerivBotBrandLightLogoHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivBotBrandLightLogoHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivBotBrandLightLogoHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
