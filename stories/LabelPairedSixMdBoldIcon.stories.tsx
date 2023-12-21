import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedSixMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedSixMdBoldIcon',
  component: LabelPairedSixMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedSixMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedSixMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
