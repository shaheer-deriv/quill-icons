import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneChevronsDownBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneChevronsDownBoldIcon',
  component: StandaloneChevronsDownBoldIcon,
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
} satisfies Meta<typeof StandaloneChevronsDownBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneChevronsDownBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
