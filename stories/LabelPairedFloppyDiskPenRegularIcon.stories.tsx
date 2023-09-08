import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFloppyDiskPenRegularIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFloppyDiskPenRegularIcon',
  component: LabelPairedFloppyDiskPenRegularIcon,
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
} satisfies Meta<typeof LabelPairedFloppyDiskPenRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFloppyDiskPenRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
