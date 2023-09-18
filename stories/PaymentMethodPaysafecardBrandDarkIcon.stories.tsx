import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPaysafecardBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPaysafecardBrandDarkIcon',
  component: PaymentMethodPaysafecardBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPaysafecardBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPaysafecardBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
