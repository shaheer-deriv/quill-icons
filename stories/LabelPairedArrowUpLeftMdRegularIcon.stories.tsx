import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpLeftMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpLeftMdRegularIcon',
  component: LabelPairedArrowUpLeftMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpLeftMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpLeftMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
