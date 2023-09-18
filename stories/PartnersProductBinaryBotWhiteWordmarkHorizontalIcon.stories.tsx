import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductBinaryBotWhiteWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductBinaryBotWhiteWordmarkHorizontalIcon',
  component: PartnersProductBinaryBotWhiteWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductBinaryBotWhiteWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductBinaryBotWhiteWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
