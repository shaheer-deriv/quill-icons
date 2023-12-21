import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleChevronUpMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleChevronUpMdRegularIcon',
  component: LabelPairedCircleChevronUpMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleChevronUpMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleChevronUpMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
