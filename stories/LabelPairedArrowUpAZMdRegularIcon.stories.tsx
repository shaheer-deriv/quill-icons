import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpAZMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpAZMdRegularIcon',
  component: LabelPairedArrowUpAZMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpAZMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpAZMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
