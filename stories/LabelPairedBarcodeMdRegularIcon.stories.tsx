import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedBarcodeMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedBarcodeMdRegularIcon',
  component: LabelPairedBarcodeMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedBarcodeMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedBarcodeMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
