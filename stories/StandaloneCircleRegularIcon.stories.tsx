import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleRegularIcon',
  component: StandaloneCircleRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
