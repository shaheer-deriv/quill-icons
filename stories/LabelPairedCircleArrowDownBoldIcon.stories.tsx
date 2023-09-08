import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleArrowDownBoldIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleArrowDownBoldIcon',
  component: LabelPairedCircleArrowDownBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleArrowDownBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleArrowDownBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
