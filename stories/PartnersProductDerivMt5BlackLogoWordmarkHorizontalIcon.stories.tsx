import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductDerivMt5BlackLogoWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductDerivMt5BlackLogoWordmarkHorizontalIcon',
  component: PartnersProductDerivMt5BlackLogoWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductDerivMt5BlackLogoWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductDerivMt5BlackLogoWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
