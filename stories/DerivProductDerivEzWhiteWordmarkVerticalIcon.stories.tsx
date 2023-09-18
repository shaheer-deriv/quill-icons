import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivEzWhiteWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivEzWhiteWordmarkVerticalIcon',
  component: DerivProductDerivEzWhiteWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivEzWhiteWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivEzWhiteWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
