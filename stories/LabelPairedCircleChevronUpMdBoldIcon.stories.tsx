import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleChevronUpMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleChevronUpMdBoldIcon',
  component: LabelPairedCircleChevronUpMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleChevronUpMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleChevronUpMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
