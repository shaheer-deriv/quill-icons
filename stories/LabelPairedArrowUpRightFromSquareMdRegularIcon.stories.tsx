import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpRightFromSquareMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpRightFromSquareMdRegularIcon',
  component: LabelPairedArrowUpRightFromSquareMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpRightFromSquareMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpRightFromSquareMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
