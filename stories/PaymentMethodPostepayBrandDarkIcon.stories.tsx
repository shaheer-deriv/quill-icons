import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPostepayBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPostepayBrandDarkIcon',
  component: PaymentMethodPostepayBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPostepayBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPostepayBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
