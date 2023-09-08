import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneSixBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneSixBoldIcon',
  component: StandaloneSixBoldIcon,
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
} satisfies Meta<typeof StandaloneSixBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneSixBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
