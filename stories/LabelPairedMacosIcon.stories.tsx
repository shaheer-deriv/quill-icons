import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMacosIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMacosIcon',
  component: LabelPairedMacosIcon,
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
} satisfies Meta<typeof LabelPairedMacosIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMacosIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
