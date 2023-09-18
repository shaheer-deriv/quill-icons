import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedOneBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedOneBoldIcon',
  component: LabelPairedOneBoldIcon,
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
} satisfies Meta<typeof LabelPairedOneBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedOneBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
