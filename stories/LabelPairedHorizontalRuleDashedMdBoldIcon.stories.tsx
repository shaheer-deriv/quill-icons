import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHorizontalRuleDashedMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHorizontalRuleDashedMdBoldIcon',
  component: LabelPairedHorizontalRuleDashedMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedHorizontalRuleDashedMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHorizontalRuleDashedMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
