import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPayLivreBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPayLivreBlackIcon',
  component: PaymentMethodPayLivreBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPayLivreBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPayLivreBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
