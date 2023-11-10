import type { Meta, StoryObj } from '@storybook/react';

import { SocialTelegramWhiteIcon } from '../src/react/Social';

const meta = {
  title: 'social/SocialTelegramWhiteIcon',
  component: SocialTelegramWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fill: { control: { type: 'color' } },
    iconSize: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: 'md',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SocialTelegramWhiteIcon>;

export default meta;

type Story = StoryObj<typeof SocialTelegramWhiteIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
