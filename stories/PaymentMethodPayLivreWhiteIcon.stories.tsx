import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPayLivreWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPayLivreWhiteIcon',
  component: PaymentMethodPayLivreWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPayLivreWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPayLivreWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
