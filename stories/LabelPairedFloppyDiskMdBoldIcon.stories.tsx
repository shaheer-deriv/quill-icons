import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFloppyDiskMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFloppyDiskMdBoldIcon',
  component: LabelPairedFloppyDiskMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedFloppyDiskMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFloppyDiskMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
