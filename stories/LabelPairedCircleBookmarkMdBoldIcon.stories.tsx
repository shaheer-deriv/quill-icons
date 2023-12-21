import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleBookmarkMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleBookmarkMdBoldIcon',
  component: LabelPairedCircleBookmarkMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleBookmarkMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleBookmarkMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
