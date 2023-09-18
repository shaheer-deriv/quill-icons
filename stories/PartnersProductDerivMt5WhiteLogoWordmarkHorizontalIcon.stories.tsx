import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductDerivMt5WhiteLogoWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductDerivMt5WhiteLogoWordmarkHorizontalIcon',
  component: PartnersProductDerivMt5WhiteLogoWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductDerivMt5WhiteLogoWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductDerivMt5WhiteLogoWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
