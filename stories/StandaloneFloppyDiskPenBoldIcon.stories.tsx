import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneFloppyDiskPenBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneFloppyDiskPenBoldIcon',
  component: StandaloneFloppyDiskPenBoldIcon,
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
} satisfies Meta<typeof StandaloneFloppyDiskPenBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneFloppyDiskPenBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
