import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivGoBrandLightWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivGoBrandLightWordmarkHorizontalIcon',
  component: DerivProductDerivGoBrandLightWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivGoBrandLightWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivGoBrandLightWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
