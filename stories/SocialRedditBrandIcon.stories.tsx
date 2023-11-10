import type { Meta, StoryObj } from '@storybook/react';

import { SocialRedditBrandIcon } from '../src/react/Social';

const meta = {
  title: 'social/SocialRedditBrandIcon',
  component: SocialRedditBrandIcon,
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
} satisfies Meta<typeof SocialRedditBrandIcon>;

export default meta;

type Story = StoryObj<typeof SocialRedditBrandIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
