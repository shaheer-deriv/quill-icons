import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductSmarttraderBrandDarkLogoWordmarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductSmarttraderBrandDarkLogoWordmarkIcon',
  component: PartnersProductSmarttraderBrandDarkLogoWordmarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductSmarttraderBrandDarkLogoWordmarkIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductSmarttraderBrandDarkLogoWordmarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
