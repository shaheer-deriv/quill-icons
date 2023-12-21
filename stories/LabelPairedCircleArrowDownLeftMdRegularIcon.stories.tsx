import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleArrowDownLeftMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleArrowDownLeftMdRegularIcon',
  component: LabelPairedCircleArrowDownLeftMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleArrowDownLeftMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleArrowDownLeftMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
