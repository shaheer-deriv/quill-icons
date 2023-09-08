import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneScissorsBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneScissorsBoldIcon',
  component: StandaloneScissorsBoldIcon,
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
} satisfies Meta<typeof StandaloneScissorsBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneScissorsBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
