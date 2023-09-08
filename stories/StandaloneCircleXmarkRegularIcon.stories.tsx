import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleXmarkRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleXmarkRegularIcon',
  component: StandaloneCircleXmarkRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleXmarkRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleXmarkRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
