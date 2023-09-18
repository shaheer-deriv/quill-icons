import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductBinaryBotWhiteLogoWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductBinaryBotWhiteLogoWordmarkHorizontalIcon',
  component: PartnersProductBinaryBotWhiteLogoWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductBinaryBotWhiteLogoWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductBinaryBotWhiteLogoWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
