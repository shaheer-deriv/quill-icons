import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductBinaryBotBlackLogoWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductBinaryBotBlackLogoWordmarkHorizontalIcon',
  component: PartnersProductBinaryBotBlackLogoWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductBinaryBotBlackLogoWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductBinaryBotBlackLogoWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
