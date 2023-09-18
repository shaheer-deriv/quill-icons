import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleNineRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleNineRegularIcon',
  component: StandaloneCircleNineRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleNineRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleNineRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
