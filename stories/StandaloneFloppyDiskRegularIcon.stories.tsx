import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneFloppyDiskRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneFloppyDiskRegularIcon',
  component: StandaloneFloppyDiskRegularIcon,
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
} satisfies Meta<typeof StandaloneFloppyDiskRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneFloppyDiskRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
