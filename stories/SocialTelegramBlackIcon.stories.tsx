import type { Meta, StoryObj } from '@storybook/react';

import { SocialTelegramBlackIcon } from '../src/react/Social';

const meta = {
  title: 'social/SocialTelegramBlackIcon',
  component: SocialTelegramBlackIcon,
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
} satisfies Meta<typeof SocialTelegramBlackIcon>;

export default meta;

type Story = StoryObj<typeof SocialTelegramBlackIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
