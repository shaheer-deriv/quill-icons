import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodTigoWhiteIcon } from '../src/react/PaymentMethods';

const meta = {
  title: 'Logo/PaymentMethodTigoWhiteIcon',
  component: PaymentMethodTigoWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodTigoWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodTigoWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
