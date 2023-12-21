import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedGaugeMaxMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedGaugeMaxMdBoldIcon',
  component: LabelPairedGaugeMaxMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedGaugeMaxMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedGaugeMaxMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
