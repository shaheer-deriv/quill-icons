import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowDownOneNineMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowDownOneNineMdRegularIcon',
  component: LabelPairedArrowDownOneNineMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowDownOneNineMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowDownOneNineMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
