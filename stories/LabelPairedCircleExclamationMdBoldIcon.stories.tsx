import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleExclamationMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleExclamationMdBoldIcon',
  component: LabelPairedCircleExclamationMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleExclamationMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleExclamationMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
