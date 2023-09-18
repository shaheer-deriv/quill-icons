import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedOneRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedOneRegularIcon',
  component: LabelPairedOneRegularIcon,
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
} satisfies Meta<typeof LabelPairedOneRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedOneRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
