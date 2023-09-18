import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductDerivMt5BrandLightWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductDerivMt5BrandLightWordmarkHorizontalIcon',
  component: PartnersProductDerivMt5BrandLightWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductDerivMt5BrandLightWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductDerivMt5BrandLightWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
