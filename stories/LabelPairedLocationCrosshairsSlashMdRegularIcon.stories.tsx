import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLocationCrosshairsSlashMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLocationCrosshairsSlashMdRegularIcon',
  component: LabelPairedLocationCrosshairsSlashMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedLocationCrosshairsSlashMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLocationCrosshairsSlashMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
