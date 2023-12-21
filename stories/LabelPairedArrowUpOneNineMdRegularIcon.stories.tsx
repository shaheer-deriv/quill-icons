import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpOneNineMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpOneNineMdRegularIcon',
  component: LabelPairedArrowUpOneNineMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpOneNineMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpOneNineMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
