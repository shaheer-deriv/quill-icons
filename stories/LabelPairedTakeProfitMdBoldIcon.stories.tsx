import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedTakeProfitMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedTakeProfitMdBoldIcon',
  component: LabelPairedTakeProfitMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedTakeProfitMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedTakeProfitMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
