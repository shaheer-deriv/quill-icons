import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodVodafoneBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodVodafoneBlackIcon',
  component: PaymentMethodVodafoneBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodVodafoneBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodVodafoneBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
