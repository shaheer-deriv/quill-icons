import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBeyonicBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBeyonicBrandDarkIcon',
  component: PaymentMethodBeyonicBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBeyonicBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBeyonicBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
