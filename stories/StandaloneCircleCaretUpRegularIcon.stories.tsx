import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleCaretUpRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleCaretUpRegularIcon',
  component: StandaloneCircleCaretUpRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleCaretUpRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleCaretUpRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
