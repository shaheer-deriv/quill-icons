import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHarmonyOsIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHarmonyOsIcon',
  component: LabelPairedHarmonyOsIcon,
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
} satisfies Meta<typeof LabelPairedHarmonyOsIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHarmonyOsIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
