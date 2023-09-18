import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodNganluongBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodNganluongBlackIcon',
  component: PaymentMethodNganluongBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodNganluongBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodNganluongBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
