import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleChevronRightBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleChevronRightBoldIcon',
  component: StandaloneCircleChevronRightBoldIcon,
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
} satisfies Meta<typeof StandaloneCircleChevronRightBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleChevronRightBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
