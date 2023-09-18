import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPaysafecardBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPaysafecardBrandLightIcon',
  component: PaymentMethodPaysafecardBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPaysafecardBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPaysafecardBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
