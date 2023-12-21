import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedPlayMdFillIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedPlayMdFillIcon',
  component: LabelPairedPlayMdFillIcon,
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
} satisfies Meta<typeof LabelPairedPlayMdFillIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedPlayMdFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
