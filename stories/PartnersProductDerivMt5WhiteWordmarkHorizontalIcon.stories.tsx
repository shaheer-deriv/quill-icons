import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductDerivMt5WhiteWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductDerivMt5WhiteWordmarkHorizontalIcon',
  component: PartnersProductDerivMt5WhiteWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductDerivMt5WhiteWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductDerivMt5WhiteWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
