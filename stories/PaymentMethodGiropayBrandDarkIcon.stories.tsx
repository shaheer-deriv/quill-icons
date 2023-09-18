import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodGiropayBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodGiropayBrandDarkIcon',
  component: PaymentMethodGiropayBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodGiropayBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodGiropayBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
