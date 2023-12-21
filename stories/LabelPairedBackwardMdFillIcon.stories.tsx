import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedBackwardMdFillIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedBackwardMdFillIcon',
  component: LabelPairedBackwardMdFillIcon,
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
} satisfies Meta<typeof LabelPairedBackwardMdFillIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedBackwardMdFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
