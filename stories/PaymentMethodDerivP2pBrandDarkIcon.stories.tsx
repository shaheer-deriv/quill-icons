import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDerivP2pBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDerivP2pBrandDarkIcon',
  component: PaymentMethodDerivP2pBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDerivP2pBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDerivP2pBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
