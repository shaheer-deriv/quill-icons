import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedDealCancellationMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedDealCancellationMdBoldIcon',
  component: LabelPairedDealCancellationMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedDealCancellationMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedDealCancellationMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
