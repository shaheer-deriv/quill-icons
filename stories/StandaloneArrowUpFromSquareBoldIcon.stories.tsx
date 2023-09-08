import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowUpFromSquareBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowUpFromSquareBoldIcon',
  component: StandaloneArrowUpFromSquareBoldIcon,
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
} satisfies Meta<typeof StandaloneArrowUpFromSquareBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowUpFromSquareBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
