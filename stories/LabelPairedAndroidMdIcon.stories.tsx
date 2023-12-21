import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedAndroidMdIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedAndroidMdIcon',
  component: LabelPairedAndroidMdIcon,
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
} satisfies Meta<typeof LabelPairedAndroidMdIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedAndroidMdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
