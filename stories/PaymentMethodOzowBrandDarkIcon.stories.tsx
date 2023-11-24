import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodOzowBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodOzowBrandDarkIcon',
  component: PaymentMethodOzowBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodOzowBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodOzowBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
