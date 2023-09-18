import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowUpFromSquareRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowUpFromSquareRegularIcon',
  component: StandaloneArrowUpFromSquareRegularIcon,
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
} satisfies Meta<typeof StandaloneArrowUpFromSquareRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowUpFromSquareRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
