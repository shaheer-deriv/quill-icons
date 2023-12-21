import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedSortMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedSortMdBoldIcon',
  component: LabelPairedSortMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedSortMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedSortMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
