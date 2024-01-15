import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodXrpBrandIcon } from '../src/react/PaymentMethods';

const meta = {
  title: 'Logo/PaymentMethodXrpBrandIcon',
  component: PaymentMethodXrpBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodXrpBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodXrpBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
