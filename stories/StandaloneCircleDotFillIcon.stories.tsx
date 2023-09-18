import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleDotFillIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleDotFillIcon',
  component: StandaloneCircleDotFillIcon,
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
} satisfies Meta<typeof StandaloneCircleDotFillIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleDotFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
