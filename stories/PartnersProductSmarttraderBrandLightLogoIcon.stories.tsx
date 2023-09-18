import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductSmarttraderBrandLightLogoIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductSmarttraderBrandLightLogoIcon',
  component: PartnersProductSmarttraderBrandLightLogoIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductSmarttraderBrandLightLogoIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductSmarttraderBrandLightLogoIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
