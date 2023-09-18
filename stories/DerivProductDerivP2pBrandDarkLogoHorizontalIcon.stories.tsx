import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivP2pBrandDarkLogoHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivP2pBrandDarkLogoHorizontalIcon',
  component: DerivProductDerivP2pBrandDarkLogoHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivP2pBrandDarkLogoHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivP2pBrandDarkLogoHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
