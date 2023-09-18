import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneTrashBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneTrashBoldIcon',
  component: StandaloneTrashBoldIcon,
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
} satisfies Meta<typeof StandaloneTrashBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneTrashBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
