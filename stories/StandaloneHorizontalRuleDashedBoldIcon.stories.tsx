import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneHorizontalRuleDashedBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneHorizontalRuleDashedBoldIcon',
  component: StandaloneHorizontalRuleDashedBoldIcon,
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
} satisfies Meta<typeof StandaloneHorizontalRuleDashedBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneHorizontalRuleDashedBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
