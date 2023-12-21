import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleEnvelopeMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleEnvelopeMdBoldIcon',
  component: LabelPairedCircleEnvelopeMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleEnvelopeMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleEnvelopeMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
