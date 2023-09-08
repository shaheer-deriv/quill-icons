import type { Meta, StoryObj } from '@storybook/react';

import { SocialGoogleIcon } from '../src/react/Social/Social';

const meta = {
  title: 'social/SocialGoogleIcon',
  component: SocialGoogleIcon,
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
} satisfies Meta<typeof SocialGoogleIcon>;

export default meta;

type Story = StoryObj<typeof SocialGoogleIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
