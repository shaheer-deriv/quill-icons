import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodXrpWhiteIcon } from '../src/react/PaymentMethods';

const meta = {
  title: 'Logo/PaymentMethodXrpWhiteIcon',
  component: PaymentMethodXrpWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodXrpWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodXrpWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
