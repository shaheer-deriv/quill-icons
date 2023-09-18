import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivEzBrandDarkWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivEzBrandDarkWordmarkHorizontalIcon',
  component: DerivProductDerivEzBrandDarkWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivEzBrandDarkWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivEzBrandDarkWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
