import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneVideoBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneVideoBoldIcon',
  component: StandaloneVideoBoldIcon,
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
} satisfies Meta<typeof StandaloneVideoBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneVideoBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
