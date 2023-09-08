import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneChevronsUpRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneChevronsUpRegularIcon',
  component: StandaloneChevronsUpRegularIcon,
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
} satisfies Meta<typeof StandaloneChevronsUpRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneChevronsUpRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
