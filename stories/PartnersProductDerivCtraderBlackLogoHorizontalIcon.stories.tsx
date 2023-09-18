import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductDerivCtraderBlackLogoHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductDerivCtraderBlackLogoHorizontalIcon',
  component: PartnersProductDerivCtraderBlackLogoHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductDerivCtraderBlackLogoHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductDerivCtraderBlackLogoHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
