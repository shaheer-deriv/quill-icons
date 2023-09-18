import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodOxxoBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodOxxoBrandLightIcon',
  component: PaymentMethodOxxoBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodOxxoBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodOxxoBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
