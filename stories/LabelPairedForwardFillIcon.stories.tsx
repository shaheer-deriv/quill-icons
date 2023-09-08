import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedForwardFillIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedForwardFillIcon',
  component: LabelPairedForwardFillIcon,
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
} satisfies Meta<typeof LabelPairedForwardFillIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedForwardFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
