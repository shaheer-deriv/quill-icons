import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleFillIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleFillIcon',
  component: StandaloneCircleFillIcon,
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
} satisfies Meta<typeof StandaloneCircleFillIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
