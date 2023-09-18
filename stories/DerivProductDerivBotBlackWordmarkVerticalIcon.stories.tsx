import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivBotBlackWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivBotBlackWordmarkVerticalIcon',
  component: DerivProductDerivBotBlackWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivBotBlackWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivBotBlackWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
