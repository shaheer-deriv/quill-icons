import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneBookmarkRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneBookmarkRegularIcon',
  component: StandaloneBookmarkRegularIcon,
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
} satisfies Meta<typeof StandaloneBookmarkRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneBookmarkRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
