import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedRedditMdIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedRedditMdIcon',
  component: LabelPairedRedditMdIcon,
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
} satisfies Meta<typeof LabelPairedRedditMdIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedRedditMdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
