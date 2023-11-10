import type { Meta, StoryObj } from '@storybook/react';

import { SocialAppleBlackIcon } from '../src/react/Social';

const meta = {
  title: 'social/SocialAppleBlackIcon',
  component: SocialAppleBlackIcon,
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
} satisfies Meta<typeof SocialAppleBlackIcon>;

export default meta;

type Story = StoryObj<typeof SocialAppleBlackIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
