import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPayretailersBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPayretailersBrandDarkIcon',
  component: PaymentMethodPayretailersBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPayretailersBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPayretailersBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
