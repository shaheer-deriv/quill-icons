import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpToLineMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpToLineMdRegularIcon',
  component: LabelPairedArrowUpToLineMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpToLineMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpToLineMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
