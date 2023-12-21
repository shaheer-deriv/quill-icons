import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMemoCircleCheckMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMemoCircleCheckMdRegularIcon',
  component: LabelPairedMemoCircleCheckMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedMemoCircleCheckMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMemoCircleCheckMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
