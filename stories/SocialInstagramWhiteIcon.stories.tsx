import type { Meta, StoryObj } from '@storybook/react';

import { SocialInstagramWhiteIcon } from '../src/react/Social';

const meta = {
  title: 'social/SocialInstagramWhiteIcon',
  component: SocialInstagramWhiteIcon,
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
} satisfies Meta<typeof SocialInstagramWhiteIcon>;

export default meta;

type Story = StoryObj<typeof SocialInstagramWhiteIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
