import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodOrangeWhiteIcon } from '../src/react/PaymentMethods';

const meta = {
  title: 'Logo/PaymentMethodOrangeWhiteIcon',
  component: PaymentMethodOrangeWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodOrangeWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodOrangeWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
