import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedForwardStepMdFillIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedForwardStepMdFillIcon',
  component: LabelPairedForwardStepMdFillIcon,
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
} satisfies Meta<typeof LabelPairedForwardStepMdFillIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedForwardStepMdFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
