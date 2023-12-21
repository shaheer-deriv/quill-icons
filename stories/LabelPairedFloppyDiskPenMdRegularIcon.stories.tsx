import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFloppyDiskPenMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFloppyDiskPenMdRegularIcon',
  component: LabelPairedFloppyDiskPenMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedFloppyDiskPenMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFloppyDiskPenMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
