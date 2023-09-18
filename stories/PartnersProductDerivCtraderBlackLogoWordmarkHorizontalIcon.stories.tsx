import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductDerivCtraderBlackLogoWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductDerivCtraderBlackLogoWordmarkHorizontalIcon',
  component: PartnersProductDerivCtraderBlackLogoWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductDerivCtraderBlackLogoWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductDerivCtraderBlackLogoWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
