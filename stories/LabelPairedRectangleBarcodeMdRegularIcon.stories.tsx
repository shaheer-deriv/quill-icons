import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedRectangleBarcodeMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedRectangleBarcodeMdRegularIcon',
  component: LabelPairedRectangleBarcodeMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedRectangleBarcodeMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedRectangleBarcodeMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
