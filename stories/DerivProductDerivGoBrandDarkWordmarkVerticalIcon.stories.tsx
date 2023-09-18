import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivGoBrandDarkWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivGoBrandDarkWordmarkVerticalIcon',
  component: DerivProductDerivGoBrandDarkWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivGoBrandDarkWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivGoBrandDarkWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
