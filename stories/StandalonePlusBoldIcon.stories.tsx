import type { Meta, StoryObj } from '@storybook/react';

import { StandalonePlusBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandalonePlusBoldIcon',
  component: StandalonePlusBoldIcon,
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
} satisfies Meta<typeof StandalonePlusBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandalonePlusBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
