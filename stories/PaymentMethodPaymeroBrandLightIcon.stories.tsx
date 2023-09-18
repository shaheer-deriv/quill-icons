import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPaymeroBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPaymeroBrandLightIcon',
  component: PaymentMethodPaymeroBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPaymeroBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPaymeroBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
