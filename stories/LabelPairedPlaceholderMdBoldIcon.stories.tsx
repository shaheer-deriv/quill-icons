import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedPlaceholderMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedPlaceholderMdBoldIcon',
  component: LabelPairedPlaceholderMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedPlaceholderMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedPlaceholderMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
