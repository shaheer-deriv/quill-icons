import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivXBlackWordmarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivXBlackWordmarkIcon',
  component: DerivProductDerivXBlackWordmarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivXBlackWordmarkIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivXBlackWordmarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
