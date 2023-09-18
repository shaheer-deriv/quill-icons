import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductBinaryBotBlackLogoHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductBinaryBotBlackLogoHorizontalIcon',
  component: PartnersProductBinaryBotBlackLogoHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductBinaryBotBlackLogoHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductBinaryBotBlackLogoHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
