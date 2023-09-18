import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductDerivCtraderBrandLightLogoHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductDerivCtraderBrandLightLogoHorizontalIcon',
  component: PartnersProductDerivCtraderBrandLightLogoHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductDerivCtraderBrandLightLogoHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductDerivCtraderBrandLightLogoHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
