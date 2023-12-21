import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedSquareMinusMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedSquareMinusMdRegularIcon',
  component: LabelPairedSquareMinusMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedSquareMinusMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedSquareMinusMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
