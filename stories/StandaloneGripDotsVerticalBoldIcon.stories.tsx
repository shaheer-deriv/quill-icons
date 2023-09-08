import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneGripDotsVerticalBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneGripDotsVerticalBoldIcon',
  component: StandaloneGripDotsVerticalBoldIcon,
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
} satisfies Meta<typeof StandaloneGripDotsVerticalBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneGripDotsVerticalBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
