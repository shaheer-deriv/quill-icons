import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivTraderWhiteWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivTraderWhiteWordmarkVerticalIcon',
  component: DerivProductDerivTraderWhiteWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivTraderWhiteWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivTraderWhiteWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
