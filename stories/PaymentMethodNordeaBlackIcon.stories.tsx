import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodNordeaBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodNordeaBlackIcon',
  component: PaymentMethodNordeaBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodNordeaBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodNordeaBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
