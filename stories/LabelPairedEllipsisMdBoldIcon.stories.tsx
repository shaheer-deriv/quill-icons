import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedEllipsisMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedEllipsisMdBoldIcon',
  component: LabelPairedEllipsisMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedEllipsisMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedEllipsisMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
