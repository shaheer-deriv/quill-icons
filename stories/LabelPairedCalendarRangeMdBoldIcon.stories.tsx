import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCalendarRangeMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCalendarRangeMdBoldIcon',
  component: LabelPairedCalendarRangeMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedCalendarRangeMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCalendarRangeMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
