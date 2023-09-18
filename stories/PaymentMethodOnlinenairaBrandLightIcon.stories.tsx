import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodOnlinenairaBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodOnlinenairaBrandLightIcon',
  component: PaymentMethodOnlinenairaBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodOnlinenairaBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodOnlinenairaBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
