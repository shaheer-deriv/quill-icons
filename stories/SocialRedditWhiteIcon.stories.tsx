import type { Meta, StoryObj } from '@storybook/react';

import { SocialRedditWhiteIcon } from '../src/react/Social';

const meta = {
  title: 'social/SocialRedditWhiteIcon',
  component: SocialRedditWhiteIcon,
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
} satisfies Meta<typeof SocialRedditWhiteIcon>;

export default meta;

type Story = StoryObj<typeof SocialRedditWhiteIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
