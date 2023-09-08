import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneBoxArchiveCircleArrowUpRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneBoxArchiveCircleArrowUpRegularIcon',
  component: StandaloneBoxArchiveCircleArrowUpRegularIcon,
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
} satisfies Meta<typeof StandaloneBoxArchiveCircleArrowUpRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneBoxArchiveCircleArrowUpRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
