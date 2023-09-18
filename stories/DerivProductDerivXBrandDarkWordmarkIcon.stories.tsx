import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivXBrandDarkWordmarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivXBrandDarkWordmarkIcon',
  component: DerivProductDerivXBrandDarkWordmarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivXBrandDarkWordmarkIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivXBrandDarkWordmarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
