import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductDerivMt5BrandLightWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductDerivMt5BrandLightWordmarkVerticalIcon',
  component: PartnersProductDerivMt5BrandLightWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductDerivMt5BrandLightWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductDerivMt5BrandLightWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
