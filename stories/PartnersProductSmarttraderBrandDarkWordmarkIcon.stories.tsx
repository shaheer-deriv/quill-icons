import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductSmarttraderBrandDarkWordmarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductSmarttraderBrandDarkWordmarkIcon',
  component: PartnersProductSmarttraderBrandDarkWordmarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductSmarttraderBrandDarkWordmarkIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductSmarttraderBrandDarkWordmarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
