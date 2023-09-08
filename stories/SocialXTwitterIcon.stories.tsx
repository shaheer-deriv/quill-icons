import type { Meta, StoryObj } from '@storybook/react';

import { SocialXTwitterIcon } from '../src/react/Social/Social';

const meta = {
  title: 'social/SocialXTwitterIcon',
  component: SocialXTwitterIcon,
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
} satisfies Meta<typeof SocialXTwitterIcon>;

export default meta;

type Story = StoryObj<typeof SocialXTwitterIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
