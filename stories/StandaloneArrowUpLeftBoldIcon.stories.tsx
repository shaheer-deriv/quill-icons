import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowUpLeftBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowUpLeftBoldIcon',
  component: StandaloneArrowUpLeftBoldIcon,
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
} satisfies Meta<typeof StandaloneArrowUpLeftBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowUpLeftBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
