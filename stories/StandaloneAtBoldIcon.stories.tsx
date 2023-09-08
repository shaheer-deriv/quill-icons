import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneAtBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneAtBoldIcon',
  component: StandaloneAtBoldIcon,
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
} satisfies Meta<typeof StandaloneAtBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneAtBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
