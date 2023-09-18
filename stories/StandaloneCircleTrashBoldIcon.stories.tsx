import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleTrashBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleTrashBoldIcon',
  component: StandaloneCircleTrashBoldIcon,
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
} satisfies Meta<typeof StandaloneCircleTrashBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleTrashBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
