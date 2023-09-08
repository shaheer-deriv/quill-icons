import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowUpAZRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowUpAZRegularIcon',
  component: StandaloneArrowUpAZRegularIcon,
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
} satisfies Meta<typeof StandaloneArrowUpAZRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowUpAZRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
