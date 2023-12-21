import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedGripDotsVerticalMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedGripDotsVerticalMdRegularIcon',
  component: LabelPairedGripDotsVerticalMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedGripDotsVerticalMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedGripDotsVerticalMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
