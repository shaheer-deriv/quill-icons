import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductDerivMt5BlackLogoHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductDerivMt5BlackLogoHorizontalIcon',
  component: PartnersProductDerivMt5BlackLogoHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductDerivMt5BlackLogoHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductDerivMt5BlackLogoHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
