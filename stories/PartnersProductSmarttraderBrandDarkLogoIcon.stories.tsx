import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductSmarttraderBrandDarkLogoIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductSmarttraderBrandDarkLogoIcon',
  component: PartnersProductSmarttraderBrandDarkLogoIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductSmarttraderBrandDarkLogoIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductSmarttraderBrandDarkLogoIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
