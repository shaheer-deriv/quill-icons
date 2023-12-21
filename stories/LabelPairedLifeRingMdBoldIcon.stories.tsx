import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLifeRingMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLifeRingMdBoldIcon',
  component: LabelPairedLifeRingMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedLifeRingMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLifeRingMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
