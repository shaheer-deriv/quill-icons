import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleArrowDownMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleArrowDownMdRegularIcon',
  component: LabelPairedCircleArrowDownMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleArrowDownMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleArrowDownMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
