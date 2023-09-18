import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneChevronsLeftBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneChevronsLeftBoldIcon',
  component: StandaloneChevronsLeftBoldIcon,
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
} satisfies Meta<typeof StandaloneChevronsLeftBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneChevronsLeftBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
