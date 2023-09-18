import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodVerveBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodVerveBrandDarkIcon',
  component: PaymentMethodVerveBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodVerveBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodVerveBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
