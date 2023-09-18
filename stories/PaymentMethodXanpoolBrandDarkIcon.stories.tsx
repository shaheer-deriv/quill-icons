import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodXanpoolBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodXanpoolBrandDarkIcon',
  component: PaymentMethodXanpoolBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodXanpoolBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodXanpoolBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
