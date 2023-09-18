import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPostepayBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPostepayBrandLightIcon',
  component: PaymentMethodPostepayBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPostepayBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPostepayBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
