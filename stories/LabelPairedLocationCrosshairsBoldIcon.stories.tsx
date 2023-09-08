import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLocationCrosshairsBoldIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLocationCrosshairsBoldIcon',
  component: LabelPairedLocationCrosshairsBoldIcon,
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
} satisfies Meta<typeof LabelPairedLocationCrosshairsBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLocationCrosshairsBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
