import type { Meta, StoryObj } from '@storybook/react';

import { SocialFacebookIcon } from '../src/react/Social';

const meta = {
  title: 'social/SocialFacebookIcon',
  component: SocialFacebookIcon,
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
} satisfies Meta<typeof SocialFacebookIcon>;

export default meta;

type Story = StoryObj<typeof SocialFacebookIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
