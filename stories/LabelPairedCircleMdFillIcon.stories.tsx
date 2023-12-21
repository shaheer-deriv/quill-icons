import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleMdFillIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleMdFillIcon',
  component: LabelPairedCircleMdFillIcon,
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
} satisfies Meta<typeof LabelPairedCircleMdFillIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleMdFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
