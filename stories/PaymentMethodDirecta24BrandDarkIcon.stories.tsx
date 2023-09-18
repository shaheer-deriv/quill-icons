import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDirecta24BrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDirecta24BrandDarkIcon',
  component: PaymentMethodDirecta24BrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDirecta24BrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDirecta24BrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
