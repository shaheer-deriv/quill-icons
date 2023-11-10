import type { Meta, StoryObj } from '@storybook/react';

import { SocialInstagramBlackIcon } from '../src/react/Social';

const meta = {
  title: 'social/SocialInstagramBlackIcon',
  component: SocialInstagramBlackIcon,
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
} satisfies Meta<typeof SocialInstagramBlackIcon>;

export default meta;

type Story = StoryObj<typeof SocialInstagramBlackIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
