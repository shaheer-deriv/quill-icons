import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodNordeaBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodNordeaBrandDarkIcon',
  component: PaymentMethodNordeaBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodNordeaBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodNordeaBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
