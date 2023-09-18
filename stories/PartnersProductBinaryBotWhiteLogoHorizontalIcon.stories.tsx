import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductBinaryBotWhiteLogoHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductBinaryBotWhiteLogoHorizontalIcon',
  component: PartnersProductBinaryBotWhiteLogoHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductBinaryBotWhiteLogoHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductBinaryBotWhiteLogoHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
