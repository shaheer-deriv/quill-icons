import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodHelp2payBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodHelp2payBrandDarkIcon',
  component: PaymentMethodHelp2payBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodHelp2payBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodHelp2payBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
