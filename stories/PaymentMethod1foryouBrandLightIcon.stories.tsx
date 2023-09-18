import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethod1foryouBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethod1foryouBrandLightIcon',
  component: PaymentMethod1foryouBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethod1foryouBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethod1foryouBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
