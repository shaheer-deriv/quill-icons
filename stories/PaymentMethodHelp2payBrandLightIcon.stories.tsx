import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodHelp2payBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodHelp2payBrandLightIcon',
  component: PaymentMethodHelp2payBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodHelp2payBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodHelp2payBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
