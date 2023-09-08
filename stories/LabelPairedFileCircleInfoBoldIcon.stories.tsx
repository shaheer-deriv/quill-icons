import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFileCircleInfoBoldIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFileCircleInfoBoldIcon',
  component: LabelPairedFileCircleInfoBoldIcon,
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
} satisfies Meta<typeof LabelPairedFileCircleInfoBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFileCircleInfoBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
