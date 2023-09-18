import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneBellSlashBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneBellSlashBoldIcon',
  component: StandaloneBellSlashBoldIcon,
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
} satisfies Meta<typeof StandaloneBellSlashBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneBellSlashBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
