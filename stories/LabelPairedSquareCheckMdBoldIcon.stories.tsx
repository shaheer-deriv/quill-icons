import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedSquareCheckMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedSquareCheckMdBoldIcon',
  component: LabelPairedSquareCheckMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedSquareCheckMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedSquareCheckMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
