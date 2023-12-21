import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFileCircleCheckMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFileCircleCheckMdBoldIcon',
  component: LabelPairedFileCircleCheckMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedFileCircleCheckMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFileCircleCheckMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
