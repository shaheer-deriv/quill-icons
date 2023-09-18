import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodJeniusBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodJeniusBrandDarkIcon',
  component: PaymentMethodJeniusBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodJeniusBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodJeniusBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
