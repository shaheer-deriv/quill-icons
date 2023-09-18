import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodNordeaWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodNordeaWhiteIcon',
  component: PaymentMethodNordeaWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodNordeaWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodNordeaWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
