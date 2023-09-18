import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBeyonicBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBeyonicBrandLightIcon',
  component: PaymentMethodBeyonicBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBeyonicBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBeyonicBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
