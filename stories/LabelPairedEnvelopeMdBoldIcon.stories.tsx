import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedEnvelopeMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedEnvelopeMdBoldIcon',
  component: LabelPairedEnvelopeMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedEnvelopeMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedEnvelopeMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
