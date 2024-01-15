import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodZamtelByAstropayBrandIcon } from '../src/react/PaymentMethods';

const meta = {
  title: 'Logo/PaymentMethodZamtelByAstropayBrandIcon',
  component: PaymentMethodZamtelByAstropayBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodZamtelByAstropayBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodZamtelByAstropayBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
