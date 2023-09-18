import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPaymeroBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPaymeroBrandDarkIcon',
  component: PaymentMethodPaymeroBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPaymeroBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPaymeroBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
