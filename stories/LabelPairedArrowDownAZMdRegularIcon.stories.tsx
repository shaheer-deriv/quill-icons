import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowDownAZMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowDownAZMdRegularIcon',
  component: LabelPairedArrowDownAZMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowDownAZMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowDownAZMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
