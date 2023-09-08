import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleInfoBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleInfoBoldIcon',
  component: StandaloneCircleInfoBoldIcon,
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
} satisfies Meta<typeof StandaloneCircleInfoBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleInfoBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
