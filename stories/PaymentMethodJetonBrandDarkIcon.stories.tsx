import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodJetonBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodJetonBrandDarkIcon',
  component: PaymentMethodJetonBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodJetonBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodJetonBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
