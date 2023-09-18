import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivP2pBlackWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivP2pBlackWordmarkVerticalIcon',
  component: DerivProductDerivP2pBlackWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivP2pBlackWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivP2pBlackWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
