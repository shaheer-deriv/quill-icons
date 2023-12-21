import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedClockThreeMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedClockThreeMdRegularIcon',
  component: LabelPairedClockThreeMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedClockThreeMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedClockThreeMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
