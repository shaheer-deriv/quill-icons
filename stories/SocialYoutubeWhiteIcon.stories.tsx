import type { Meta, StoryObj } from '@storybook/react';

import { SocialYoutubeWhiteIcon } from '../src/react/Social';

const meta = {
  title: 'social/SocialYoutubeWhiteIcon',
  component: SocialYoutubeWhiteIcon,
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
} satisfies Meta<typeof SocialYoutubeWhiteIcon>;

export default meta;

type Story = StoryObj<typeof SocialYoutubeWhiteIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
