import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivEzBrandDarkWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivEzBrandDarkWordmarkVerticalIcon',
  component: DerivProductDerivEzBrandDarkWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivEzBrandDarkWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivEzBrandDarkWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
