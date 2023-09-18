import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPayretailersBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPayretailersBrandLightIcon',
  component: PaymentMethodPayretailersBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPayretailersBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPayretailersBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
