import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductDerivCtraderBlackWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductDerivCtraderBlackWordmarkHorizontalIcon',
  component: PartnersProductDerivCtraderBlackWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductDerivCtraderBlackWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductDerivCtraderBlackWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
