import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedTriangleExclamationMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedTriangleExclamationMdBoldIcon',
  component: LabelPairedTriangleExclamationMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedTriangleExclamationMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedTriangleExclamationMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
