import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductDerivMt5WhiteWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductDerivMt5WhiteWordmarkVerticalIcon',
  component: PartnersProductDerivMt5WhiteWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductDerivMt5WhiteWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductDerivMt5WhiteWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
