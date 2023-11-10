import type { Meta, StoryObj } from '@storybook/react';

import { SocialFacebookBlackIcon } from '../src/react/Social';

const meta = {
  title: 'social/SocialFacebookBlackIcon',
  component: SocialFacebookBlackIcon,
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
} satisfies Meta<typeof SocialFacebookBlackIcon>;

export default meta;

type Story = StoryObj<typeof SocialFacebookBlackIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
