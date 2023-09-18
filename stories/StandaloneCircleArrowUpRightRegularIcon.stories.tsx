import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleArrowUpRightRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleArrowUpRightRegularIcon',
  component: StandaloneCircleArrowUpRightRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleArrowUpRightRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleArrowUpRightRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
