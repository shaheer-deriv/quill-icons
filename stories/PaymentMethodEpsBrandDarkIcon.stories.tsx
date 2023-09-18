import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodEpsBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodEpsBrandDarkIcon',
  component: PaymentMethodEpsBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodEpsBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodEpsBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
