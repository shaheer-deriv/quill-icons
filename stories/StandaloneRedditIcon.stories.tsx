import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneRedditIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneRedditIcon',
  component: StandaloneRedditIcon,
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
} satisfies Meta<typeof StandaloneRedditIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneRedditIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
