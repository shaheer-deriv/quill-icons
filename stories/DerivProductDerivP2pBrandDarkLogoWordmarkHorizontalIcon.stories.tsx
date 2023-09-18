import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivP2pBrandDarkLogoWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivP2pBrandDarkLogoWordmarkHorizontalIcon',
  component: DerivProductDerivP2pBrandDarkLogoWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivP2pBrandDarkLogoWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivP2pBrandDarkLogoWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
