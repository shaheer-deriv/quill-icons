import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodSkrill1TapWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodSkrill1TapWhiteIcon',
  component: PaymentMethodSkrill1TapWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodSkrill1TapWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodSkrill1TapWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
