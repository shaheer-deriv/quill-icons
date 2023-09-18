import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethod1foryouBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethod1foryouBrandDarkIcon',
  component: PaymentMethod1foryouBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethod1foryouBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethod1foryouBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
