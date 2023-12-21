import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHuaweiMdIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHuaweiMdIcon',
  component: LabelPairedHuaweiMdIcon,
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
} satisfies Meta<typeof LabelPairedHuaweiMdIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHuaweiMdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
