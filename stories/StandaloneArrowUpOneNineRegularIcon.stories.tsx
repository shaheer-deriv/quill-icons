import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowUpOneNineRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowUpOneNineRegularIcon',
  component: StandaloneArrowUpOneNineRegularIcon,
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
} satisfies Meta<typeof StandaloneArrowUpOneNineRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowUpOneNineRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
