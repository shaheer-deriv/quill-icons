import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleBookmarkRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleBookmarkRegularIcon',
  component: StandaloneCircleBookmarkRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleBookmarkRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleBookmarkRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
