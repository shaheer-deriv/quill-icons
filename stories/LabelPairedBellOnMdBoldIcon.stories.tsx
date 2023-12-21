import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedBellOnMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedBellOnMdBoldIcon',
  component: LabelPairedBellOnMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedBellOnMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedBellOnMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
