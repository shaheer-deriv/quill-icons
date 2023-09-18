import type { Meta, StoryObj } from '@storybook/react';

import { SocialRedditIcon } from '../src/react/Social';

const meta = {
  title: 'social/SocialRedditIcon',
  component: SocialRedditIcon,
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
} satisfies Meta<typeof SocialRedditIcon>;

export default meta;

type Story = StoryObj<typeof SocialRedditIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
