import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleTrashMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleTrashMdBoldIcon',
  component: LabelPairedCircleTrashMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleTrashMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleTrashMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
