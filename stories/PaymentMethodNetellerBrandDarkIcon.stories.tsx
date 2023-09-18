import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodNetellerBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodNetellerBrandDarkIcon',
  component: PaymentMethodNetellerBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodNetellerBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodNetellerBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
