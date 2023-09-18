import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleSortRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleSortRegularIcon',
  component: StandaloneCircleSortRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleSortRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleSortRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
