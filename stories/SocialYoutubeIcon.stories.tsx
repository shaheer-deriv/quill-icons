import type { Meta, StoryObj } from '@storybook/react';

import { SocialYoutubeIcon } from '../src/react/Social';

const meta = {
  title: 'social/SocialYoutubeIcon',
  component: SocialYoutubeIcon,
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
} satisfies Meta<typeof SocialYoutubeIcon>;

export default meta;

type Story = StoryObj<typeof SocialYoutubeIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
