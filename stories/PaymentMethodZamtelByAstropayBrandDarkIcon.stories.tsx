import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodZamtelByAstropayBrandDarkIcon } from '../src/react/PaymentMethods';

const meta = {
  title: 'Logo/PaymentMethodZamtelByAstropayBrandDarkIcon',
  component: PaymentMethodZamtelByAstropayBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodZamtelByAstropayBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodZamtelByAstropayBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
