import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivNakalaWhiteWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivNakalaWhiteWordmarkVerticalIcon',
  component: DerivProductDerivNakalaWhiteWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivNakalaWhiteWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivNakalaWhiteWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
