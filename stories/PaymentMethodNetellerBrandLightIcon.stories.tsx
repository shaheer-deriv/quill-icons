import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodNetellerBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodNetellerBrandLightIcon',
  component: PaymentMethodNetellerBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodNetellerBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodNetellerBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
