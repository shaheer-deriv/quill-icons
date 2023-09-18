import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivNakalaBrandLightWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivNakalaBrandLightWordmarkHorizontalIcon',
  component: DerivProductDerivNakalaBrandLightWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivNakalaBrandLightWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivNakalaBrandLightWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
