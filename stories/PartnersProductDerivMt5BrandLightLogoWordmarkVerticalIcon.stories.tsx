import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductDerivMt5BrandLightLogoWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductDerivMt5BrandLightLogoWordmarkVerticalIcon',
  component: PartnersProductDerivMt5BrandLightLogoWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductDerivMt5BrandLightLogoWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductDerivMt5BrandLightLogoWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
