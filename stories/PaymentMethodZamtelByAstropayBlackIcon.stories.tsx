import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodZamtelByAstropayBlackIcon } from '../src/react/PaymentMethods';

const meta = {
  title: 'Logo/PaymentMethodZamtelByAstropayBlackIcon',
  component: PaymentMethodZamtelByAstropayBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodZamtelByAstropayBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodZamtelByAstropayBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
