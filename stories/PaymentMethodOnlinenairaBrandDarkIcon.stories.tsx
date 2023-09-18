import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodOnlinenairaBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodOnlinenairaBrandDarkIcon',
  component: PaymentMethodOnlinenairaBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodOnlinenairaBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodOnlinenairaBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
