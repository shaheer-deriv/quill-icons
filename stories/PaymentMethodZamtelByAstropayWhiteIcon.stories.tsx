import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodZamtelByAstropayWhiteIcon } from '../src/react/PaymentMethods';

const meta = {
  title: 'Logo/PaymentMethodZamtelByAstropayWhiteIcon',
  component: PaymentMethodZamtelByAstropayWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodZamtelByAstropayWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodZamtelByAstropayWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
