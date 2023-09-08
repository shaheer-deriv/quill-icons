import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLightUserTieCircleDollarBoldIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLightUserTieCircleDollarBoldIcon',
  component: LabelPairedLightUserTieCircleDollarBoldIcon,
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
} satisfies Meta<typeof LabelPairedLightUserTieCircleDollarBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLightUserTieCircleDollarBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
