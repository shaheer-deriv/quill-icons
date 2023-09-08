import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleArrowUpLeftRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleArrowUpLeftRegularIcon',
  component: StandaloneCircleArrowUpLeftRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleArrowUpLeftRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleArrowUpLeftRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
