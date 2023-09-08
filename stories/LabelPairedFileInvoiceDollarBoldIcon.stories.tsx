import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFileInvoiceDollarBoldIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFileInvoiceDollarBoldIcon',
  component: LabelPairedFileInvoiceDollarBoldIcon,
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
} satisfies Meta<typeof LabelPairedFileInvoiceDollarBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFileInvoiceDollarBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
