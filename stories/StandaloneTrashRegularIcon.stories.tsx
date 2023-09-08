import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneTrashRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneTrashRegularIcon',
  component: StandaloneTrashRegularIcon,
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
} satisfies Meta<typeof StandaloneTrashRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneTrashRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
