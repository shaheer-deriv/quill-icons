import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDinersClubInternationalBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDinersClubInternationalBlackIcon',
  component: PaymentMethodDinersClubInternationalBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDinersClubInternationalBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDinersClubInternationalBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
