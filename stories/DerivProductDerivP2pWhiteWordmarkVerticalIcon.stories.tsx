import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivP2pWhiteWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivP2pWhiteWordmarkVerticalIcon',
  component: DerivProductDerivP2pWhiteWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivP2pWhiteWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivP2pWhiteWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
