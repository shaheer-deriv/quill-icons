import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLocationCrosshairsSlashMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLocationCrosshairsSlashMdBoldIcon',
  component: LabelPairedLocationCrosshairsSlashMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedLocationCrosshairsSlashMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLocationCrosshairsSlashMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
