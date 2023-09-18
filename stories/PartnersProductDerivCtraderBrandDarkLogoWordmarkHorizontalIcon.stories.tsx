import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductDerivCtraderBrandDarkLogoWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductDerivCtraderBrandDarkLogoWordmarkHorizontalIcon',
  component: PartnersProductDerivCtraderBrandDarkLogoWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductDerivCtraderBrandDarkLogoWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductDerivCtraderBrandDarkLogoWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
