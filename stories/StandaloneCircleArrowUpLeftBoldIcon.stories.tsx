import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleArrowUpLeftBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleArrowUpLeftBoldIcon',
  component: StandaloneCircleArrowUpLeftBoldIcon,
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
} satisfies Meta<typeof StandaloneCircleArrowUpLeftBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleArrowUpLeftBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
