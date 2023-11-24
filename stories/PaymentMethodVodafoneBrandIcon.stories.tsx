import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodVodafoneBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodVodafoneBrandIcon',
  component: PaymentMethodVodafoneBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodVodafoneBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodVodafoneBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
