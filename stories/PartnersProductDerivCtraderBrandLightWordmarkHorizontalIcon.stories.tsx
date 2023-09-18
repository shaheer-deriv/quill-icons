import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductDerivCtraderBrandLightWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductDerivCtraderBrandLightWordmarkHorizontalIcon',
  component: PartnersProductDerivCtraderBrandLightWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductDerivCtraderBrandLightWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductDerivCtraderBrandLightWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
