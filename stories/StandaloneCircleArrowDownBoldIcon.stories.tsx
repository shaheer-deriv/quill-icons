import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleArrowDownBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleArrowDownBoldIcon',
  component: StandaloneCircleArrowDownBoldIcon,
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
} satisfies Meta<typeof StandaloneCircleArrowDownBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleArrowDownBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
