import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedPlayFillIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedPlayFillIcon',
  component: LabelPairedPlayFillIcon,
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
} satisfies Meta<typeof LabelPairedPlayFillIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedPlayFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
