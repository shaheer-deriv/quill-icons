import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleEllipsisMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleEllipsisMdRegularIcon',
  component: LabelPairedCircleEllipsisMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleEllipsisMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleEllipsisMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
