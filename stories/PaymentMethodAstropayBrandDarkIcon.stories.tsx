import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodAstropayBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodAstropayBrandDarkIcon',
  component: PaymentMethodAstropayBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodAstropayBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodAstropayBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
