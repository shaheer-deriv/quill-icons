import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedXTwitterIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedXTwitterIcon',
  component: LabelPairedXTwitterIcon,
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
} satisfies Meta<typeof LabelPairedXTwitterIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedXTwitterIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
