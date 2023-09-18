import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductDerivMt5BrandDarkLogoWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductDerivMt5BrandDarkLogoWordmarkVerticalIcon',
  component: PartnersProductDerivMt5BrandDarkLogoWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductDerivMt5BrandDarkLogoWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductDerivMt5BrandDarkLogoWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
