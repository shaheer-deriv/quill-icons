import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpFromBracketRegularIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpFromBracketRegularIcon',
  component: LabelPairedArrowUpFromBracketRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpFromBracketRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpFromBracketRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
