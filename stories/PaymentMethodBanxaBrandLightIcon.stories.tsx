import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBanxaBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBanxaBrandLightIcon',
  component: PaymentMethodBanxaBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBanxaBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBanxaBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
