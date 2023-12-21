import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedSquareCheckMdFillIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedSquareCheckMdFillIcon',
  component: LabelPairedSquareCheckMdFillIcon,
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
} satisfies Meta<typeof LabelPairedSquareCheckMdFillIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedSquareCheckMdFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
