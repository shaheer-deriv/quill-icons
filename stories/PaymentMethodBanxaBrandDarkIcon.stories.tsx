import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBanxaBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBanxaBrandDarkIcon',
  component: PaymentMethodBanxaBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBanxaBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBanxaBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
