import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodNordeaBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodNordeaBrandLightIcon',
  component: PaymentMethodNordeaBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodNordeaBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodNordeaBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
