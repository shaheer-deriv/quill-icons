import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPixBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPixBrandDarkIcon',
  component: PaymentMethodPixBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPixBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPixBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
