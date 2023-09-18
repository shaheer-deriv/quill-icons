import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivGoUltimateWhiteWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivGoUltimateWhiteWordmarkVerticalIcon',
  component: DerivProductDerivGoUltimateWhiteWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivGoUltimateWhiteWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivGoUltimateWhiteWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
