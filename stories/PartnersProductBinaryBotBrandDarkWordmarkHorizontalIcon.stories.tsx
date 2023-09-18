import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductBinaryBotBrandDarkWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductBinaryBotBrandDarkWordmarkHorizontalIcon',
  component: PartnersProductBinaryBotBrandDarkWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductBinaryBotBrandDarkWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductBinaryBotBrandDarkWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
