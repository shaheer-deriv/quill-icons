import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedAndroidIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedAndroidIcon',
  component: LabelPairedAndroidIcon,
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
} satisfies Meta<typeof LabelPairedAndroidIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedAndroidIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
