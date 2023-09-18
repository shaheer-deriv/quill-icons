import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductSmarttraderBrandLightWordmarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductSmarttraderBrandLightWordmarkIcon',
  component: PartnersProductSmarttraderBrandLightWordmarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductSmarttraderBrandLightWordmarkIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductSmarttraderBrandLightWordmarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
