import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowUpAZBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowUpAZBoldIcon',
  component: StandaloneArrowUpAZBoldIcon,
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
} satisfies Meta<typeof StandaloneArrowUpAZBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowUpAZBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
