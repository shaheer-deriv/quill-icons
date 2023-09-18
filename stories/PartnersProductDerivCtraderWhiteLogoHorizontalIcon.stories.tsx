import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductDerivCtraderWhiteLogoHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductDerivCtraderWhiteLogoHorizontalIcon',
  component: PartnersProductDerivCtraderWhiteLogoHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductDerivCtraderWhiteLogoHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductDerivCtraderWhiteLogoHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
