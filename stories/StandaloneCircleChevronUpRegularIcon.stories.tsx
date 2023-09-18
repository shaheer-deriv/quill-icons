import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleChevronUpRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleChevronUpRegularIcon',
  component: StandaloneCircleChevronUpRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleChevronUpRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleChevronUpRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
