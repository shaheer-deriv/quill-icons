import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivGoUltimateBlackWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivGoUltimateBlackWordmarkVerticalIcon',
  component: DerivProductDerivGoUltimateBlackWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivGoUltimateBlackWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivGoUltimateBlackWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
