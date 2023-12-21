import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowsRotateMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowsRotateMdRegularIcon',
  component: LabelPairedArrowsRotateMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowsRotateMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowsRotateMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
