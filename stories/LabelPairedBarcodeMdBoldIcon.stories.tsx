import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedBarcodeMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedBarcodeMdBoldIcon',
  component: LabelPairedBarcodeMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedBarcodeMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedBarcodeMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
