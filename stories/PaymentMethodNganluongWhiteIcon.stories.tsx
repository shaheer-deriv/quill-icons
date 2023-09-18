import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodNganluongWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodNganluongWhiteIcon',
  component: PaymentMethodNganluongWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodNganluongWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodNganluongWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
