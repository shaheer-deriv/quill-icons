import type { Meta, StoryObj } from '@storybook/react';

import { SocialYoutubeBlackIcon } from '../src/react/Social';

const meta = {
  title: 'social/SocialYoutubeBlackIcon',
  component: SocialYoutubeBlackIcon,
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
} satisfies Meta<typeof SocialYoutubeBlackIcon>;

export default meta;

type Story = StoryObj<typeof SocialYoutubeBlackIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
