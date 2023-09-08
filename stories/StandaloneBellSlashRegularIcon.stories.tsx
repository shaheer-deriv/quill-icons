import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneBellSlashRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneBellSlashRegularIcon',
  component: StandaloneBellSlashRegularIcon,
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
} satisfies Meta<typeof StandaloneBellSlashRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneBellSlashRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
