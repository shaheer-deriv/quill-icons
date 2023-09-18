import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleOneRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleOneRegularIcon',
  component: StandaloneCircleOneRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleOneRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleOneRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
