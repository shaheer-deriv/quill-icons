import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedInstagramMdIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedInstagramMdIcon',
  component: LabelPairedInstagramMdIcon,
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
} satisfies Meta<typeof LabelPairedInstagramMdIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedInstagramMdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
