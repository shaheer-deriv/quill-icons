import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHarmonyOsMdIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHarmonyOsMdIcon',
  component: LabelPairedHarmonyOsMdIcon,
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
} satisfies Meta<typeof LabelPairedHarmonyOsMdIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHarmonyOsMdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
