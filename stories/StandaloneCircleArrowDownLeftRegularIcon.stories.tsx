import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleArrowDownLeftRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleArrowDownLeftRegularIcon',
  component: StandaloneCircleArrowDownLeftRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleArrowDownLeftRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleArrowDownLeftRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
