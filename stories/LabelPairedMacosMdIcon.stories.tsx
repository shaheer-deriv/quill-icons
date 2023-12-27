import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMacosMdIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMacosMdIcon',
  component: LabelPairedMacosMdIcon,
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
} satisfies Meta<typeof LabelPairedMacosMdIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMacosMdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
