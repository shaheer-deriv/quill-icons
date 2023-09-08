import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHorizontalRuleBoldIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHorizontalRuleBoldIcon',
  component: LabelPairedHorizontalRuleBoldIcon,
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
} satisfies Meta<typeof LabelPairedHorizontalRuleBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHorizontalRuleBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
