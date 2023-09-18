import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleDotBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleDotBoldIcon',
  component: StandaloneCircleDotBoldIcon,
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
} satisfies Meta<typeof StandaloneCircleDotBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleDotBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
