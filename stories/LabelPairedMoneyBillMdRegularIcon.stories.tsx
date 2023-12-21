import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMoneyBillMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMoneyBillMdRegularIcon',
  component: LabelPairedMoneyBillMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedMoneyBillMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMoneyBillMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
