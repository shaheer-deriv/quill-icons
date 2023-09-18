import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodJeniusBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodJeniusBrandLightIcon',
  component: PaymentMethodJeniusBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodJeniusBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodJeniusBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
