import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedRectangleAdMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedRectangleAdMdRegularIcon',
  component: LabelPairedRectangleAdMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedRectangleAdMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedRectangleAdMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
