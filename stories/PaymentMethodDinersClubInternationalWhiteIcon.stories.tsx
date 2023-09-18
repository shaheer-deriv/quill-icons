import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDinersClubInternationalWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDinersClubInternationalWhiteIcon',
  component: PaymentMethodDinersClubInternationalWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDinersClubInternationalWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDinersClubInternationalWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
