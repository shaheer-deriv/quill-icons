import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodOxxoBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodOxxoBrandDarkIcon',
  component: PaymentMethodOxxoBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodOxxoBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodOxxoBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
