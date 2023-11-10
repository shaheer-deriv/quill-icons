import type { Meta, StoryObj } from '@storybook/react';

import { SocialGoogleBlackIcon } from '../src/react/Social';

const meta = {
  title: 'social/SocialGoogleBlackIcon',
  component: SocialGoogleBlackIcon,
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
} satisfies Meta<typeof SocialGoogleBlackIcon>;

export default meta;

type Story = StoryObj<typeof SocialGoogleBlackIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
