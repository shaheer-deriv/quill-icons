import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedSquareFillIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedSquareFillIcon',
  component: LabelPairedSquareFillIcon,
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
} satisfies Meta<typeof LabelPairedSquareFillIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedSquareFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
