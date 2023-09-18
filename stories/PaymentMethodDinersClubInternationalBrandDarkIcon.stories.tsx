import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDinersClubInternationalBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDinersClubInternationalBrandDarkIcon',
  component: PaymentMethodDinersClubInternationalBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDinersClubInternationalBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDinersClubInternationalBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
