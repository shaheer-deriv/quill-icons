import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpArrowDownMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpArrowDownMdRegularIcon',
  component: LabelPairedArrowUpArrowDownMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpArrowDownMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpArrowDownMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
