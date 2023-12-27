import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLightUserTieCircleDollarMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLightUserTieCircleDollarMdBoldIcon',
  component: LabelPairedLightUserTieCircleDollarMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedLightUserTieCircleDollarMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLightUserTieCircleDollarMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
