import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDiscoverBrandDarkIcon } from '../src/react/PaymentMethods';

const meta = {
  title: 'Logo/PaymentMethodDiscoverBrandDarkIcon',
  component: PaymentMethodDiscoverBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDiscoverBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDiscoverBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
