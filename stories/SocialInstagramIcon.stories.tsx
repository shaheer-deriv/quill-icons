import type { Meta, StoryObj } from '@storybook/react';

import { SocialInstagramIcon } from '../src/react/Social/Social';

const meta = {
  title: 'social/SocialInstagramIcon',
  component: SocialInstagramIcon,
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
} satisfies Meta<typeof SocialInstagramIcon>;

export default meta;

type Story = StoryObj<typeof SocialInstagramIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
