import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleZeroBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleZeroBoldIcon',
  component: StandaloneCircleZeroBoldIcon,
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
} satisfies Meta<typeof StandaloneCircleZeroBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleZeroBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
