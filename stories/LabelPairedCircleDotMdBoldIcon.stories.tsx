import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleDotMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleDotMdBoldIcon',
  component: LabelPairedCircleDotMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleDotMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleDotMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
