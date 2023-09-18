import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivEzBlackWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivEzBlackWordmarkVerticalIcon',
  component: DerivProductDerivEzBlackWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivEzBlackWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivEzBlackWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
