import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowUpToLineRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowUpToLineRegularIcon',
  component: StandaloneArrowUpToLineRegularIcon,
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
} satisfies Meta<typeof StandaloneArrowUpToLineRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowUpToLineRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
