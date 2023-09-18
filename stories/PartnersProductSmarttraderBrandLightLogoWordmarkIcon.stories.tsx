import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductSmarttraderBrandLightLogoWordmarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductSmarttraderBrandLightLogoWordmarkIcon',
  component: PartnersProductSmarttraderBrandLightLogoWordmarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductSmarttraderBrandLightLogoWordmarkIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductSmarttraderBrandLightLogoWordmarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
