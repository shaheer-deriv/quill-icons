import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDirecta24BrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDirecta24BrandLightIcon',
  component: PaymentMethodDirecta24BrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDirecta24BrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDirecta24BrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
