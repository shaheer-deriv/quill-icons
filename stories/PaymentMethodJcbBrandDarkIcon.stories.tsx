import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodJcbBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodJcbBrandDarkIcon',
  component: PaymentMethodJcbBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodJcbBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodJcbBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
