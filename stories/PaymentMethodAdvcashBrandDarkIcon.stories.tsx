import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodAdvcashBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodAdvcashBrandDarkIcon',
  component: PaymentMethodAdvcashBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodAdvcashBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodAdvcashBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
