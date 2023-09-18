import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneMoonBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneMoonBoldIcon',
  component: StandaloneMoonBoldIcon,
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
} satisfies Meta<typeof StandaloneMoonBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneMoonBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
