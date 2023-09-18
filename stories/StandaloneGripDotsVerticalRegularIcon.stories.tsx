import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneGripDotsVerticalRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneGripDotsVerticalRegularIcon',
  component: StandaloneGripDotsVerticalRegularIcon,
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
} satisfies Meta<typeof StandaloneGripDotsVerticalRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneGripDotsVerticalRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
