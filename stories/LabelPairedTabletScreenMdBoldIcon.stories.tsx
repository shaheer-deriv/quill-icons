import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedTabletScreenMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedTabletScreenMdBoldIcon',
  component: LabelPairedTabletScreenMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedTabletScreenMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedTabletScreenMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
