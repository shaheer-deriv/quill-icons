import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodNordeaBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodNordeaBrandIcon',
  component: PaymentMethodNordeaBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodNordeaBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodNordeaBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
