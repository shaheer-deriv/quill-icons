import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleArrowUpRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleArrowUpRegularIcon',
  component: StandaloneCircleArrowUpRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleArrowUpRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleArrowUpRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
