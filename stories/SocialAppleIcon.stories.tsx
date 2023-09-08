import type { Meta, StoryObj } from '@storybook/react';

import { SocialAppleIcon } from '../src/react/Social/Social';

const meta = {
  title: 'social/SocialAppleIcon',
  component: SocialAppleIcon,
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
} satisfies Meta<typeof SocialAppleIcon>;

export default meta;

type Story = StoryObj<typeof SocialAppleIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
