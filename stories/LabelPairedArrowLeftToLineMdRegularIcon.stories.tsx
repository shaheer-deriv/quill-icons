import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowLeftToLineMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowLeftToLineMdRegularIcon',
  component: LabelPairedArrowLeftToLineMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowLeftToLineMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowLeftToLineMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
