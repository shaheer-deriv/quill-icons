import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleEuroBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleEuroBoldIcon',
  component: StandaloneCircleEuroBoldIcon,
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
} satisfies Meta<typeof StandaloneCircleEuroBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleEuroBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
