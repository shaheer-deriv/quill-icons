import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductDerivMt5BrandDarkLogoHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductDerivMt5BrandDarkLogoHorizontalIcon',
  component: PartnersProductDerivMt5BrandDarkLogoHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductDerivMt5BrandDarkLogoHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductDerivMt5BrandDarkLogoHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
