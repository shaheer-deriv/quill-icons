import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodTigoBlackIcon } from '../src/react/PaymentMethods';

const meta = {
  title: 'Logo/PaymentMethodTigoBlackIcon',
  component: PaymentMethodTigoBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodTigoBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodTigoBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
