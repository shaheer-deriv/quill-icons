import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWindowsMdIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWindowsMdIcon',
  component: LabelPairedWindowsMdIcon,
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
} satisfies Meta<typeof LabelPairedWindowsMdIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWindowsMdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
