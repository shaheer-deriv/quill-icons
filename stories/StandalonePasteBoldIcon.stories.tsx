import type { Meta, StoryObj } from '@storybook/react';

import { StandalonePasteBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandalonePasteBoldIcon',
  component: StandalonePasteBoldIcon,
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
} satisfies Meta<typeof StandalonePasteBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandalonePasteBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
