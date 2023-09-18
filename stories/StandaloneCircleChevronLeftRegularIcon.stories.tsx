import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleChevronLeftRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleChevronLeftRegularIcon',
  component: StandaloneCircleChevronLeftRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleChevronLeftRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleChevronLeftRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
