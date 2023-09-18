import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivXWhiteWordmarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivXWhiteWordmarkIcon',
  component: DerivProductDerivXWhiteWordmarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivXWhiteWordmarkIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivXWhiteWordmarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
