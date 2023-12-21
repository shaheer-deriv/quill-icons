import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedAppleMdIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedAppleMdIcon',
  component: LabelPairedAppleMdIcon,
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
} satisfies Meta<typeof LabelPairedAppleMdIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedAppleMdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
