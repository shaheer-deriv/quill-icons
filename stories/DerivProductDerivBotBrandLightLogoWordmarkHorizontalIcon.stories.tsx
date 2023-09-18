import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivBotBrandLightLogoWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivBotBrandLightLogoWordmarkHorizontalIcon',
  component: DerivProductDerivBotBrandLightLogoWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivBotBrandLightLogoWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivBotBrandLightLogoWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
