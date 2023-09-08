import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneBookmarkBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneBookmarkBoldIcon',
  component: StandaloneBookmarkBoldIcon,
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
} satisfies Meta<typeof StandaloneBookmarkBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneBookmarkBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
