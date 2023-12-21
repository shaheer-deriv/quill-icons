import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowDownOneNineMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowDownOneNineMdBoldIcon',
  component: LabelPairedArrowDownOneNineMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowDownOneNineMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowDownOneNineMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
