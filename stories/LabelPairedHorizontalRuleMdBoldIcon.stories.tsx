import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHorizontalRuleMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHorizontalRuleMdBoldIcon',
  component: LabelPairedHorizontalRuleMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedHorizontalRuleMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHorizontalRuleMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
