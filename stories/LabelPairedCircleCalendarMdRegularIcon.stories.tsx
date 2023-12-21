import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleCalendarMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleCalendarMdRegularIcon',
  component: LabelPairedCircleCalendarMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleCalendarMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleCalendarMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
