import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneHorizontalRuleBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneHorizontalRuleBoldIcon',
  component: StandaloneHorizontalRuleBoldIcon,
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
} satisfies Meta<typeof StandaloneHorizontalRuleBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneHorizontalRuleBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
