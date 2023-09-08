import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpArrowDownRegularIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpArrowDownRegularIcon',
  component: LabelPairedArrowUpArrowDownRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpArrowDownRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpArrowDownRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
