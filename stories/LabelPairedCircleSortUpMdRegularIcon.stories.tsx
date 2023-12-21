import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleSortUpMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleSortUpMdRegularIcon',
  component: LabelPairedCircleSortUpMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleSortUpMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleSortUpMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
