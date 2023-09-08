import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneEightBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneEightBoldIcon',
  component: StandaloneEightBoldIcon,
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
} satisfies Meta<typeof StandaloneEightBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneEightBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
