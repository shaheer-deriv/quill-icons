import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedEllipsisVerticalMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedEllipsisVerticalMdRegularIcon',
  component: LabelPairedEllipsisVerticalMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedEllipsisVerticalMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedEllipsisVerticalMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
