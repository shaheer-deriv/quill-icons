import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleCalendarMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleCalendarMdBoldIcon',
  component: LabelPairedCircleCalendarMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleCalendarMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleCalendarMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
