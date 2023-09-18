import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivP2pBrandLightLogoHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivP2pBrandLightLogoHorizontalIcon',
  component: DerivProductDerivP2pBrandLightLogoHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivP2pBrandLightLogoHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivP2pBrandLightLogoHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
