import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFloppyDiskPenBoldIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFloppyDiskPenBoldIcon',
  component: LabelPairedFloppyDiskPenBoldIcon,
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
} satisfies Meta<typeof LabelPairedFloppyDiskPenBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFloppyDiskPenBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
