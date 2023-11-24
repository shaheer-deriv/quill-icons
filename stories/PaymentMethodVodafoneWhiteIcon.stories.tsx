import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodVodafoneWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodVodafoneWhiteIcon',
  component: PaymentMethodVodafoneWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodVodafoneWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodVodafoneWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
