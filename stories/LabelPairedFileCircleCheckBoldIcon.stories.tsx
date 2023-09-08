import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFileCircleCheckBoldIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFileCircleCheckBoldIcon',
  component: LabelPairedFileCircleCheckBoldIcon,
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
} satisfies Meta<typeof LabelPairedFileCircleCheckBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFileCircleCheckBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
