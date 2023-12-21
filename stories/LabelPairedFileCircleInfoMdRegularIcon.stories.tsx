import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFileCircleInfoMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFileCircleInfoMdRegularIcon',
  component: LabelPairedFileCircleInfoMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedFileCircleInfoMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFileCircleInfoMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
