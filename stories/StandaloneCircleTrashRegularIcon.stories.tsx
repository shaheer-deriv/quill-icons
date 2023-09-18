import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleTrashRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleTrashRegularIcon',
  component: StandaloneCircleTrashRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleTrashRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleTrashRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
