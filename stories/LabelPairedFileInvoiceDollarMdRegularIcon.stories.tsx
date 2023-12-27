import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFileInvoiceDollarMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFileInvoiceDollarMdRegularIcon',
  component: LabelPairedFileInvoiceDollarMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedFileInvoiceDollarMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFileInvoiceDollarMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
