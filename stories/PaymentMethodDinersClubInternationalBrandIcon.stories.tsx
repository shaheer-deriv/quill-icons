import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDinersClubInternationalBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDinersClubInternationalBrandIcon',
  component: PaymentMethodDinersClubInternationalBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDinersClubInternationalBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDinersClubInternationalBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
