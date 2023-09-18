import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodGiropayBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodGiropayBrandLightIcon',
  component: PaymentMethodGiropayBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodGiropayBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodGiropayBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
