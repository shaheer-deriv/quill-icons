import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLightUserTieCircleDollarRegularIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLightUserTieCircleDollarRegularIcon',
  component: LabelPairedLightUserTieCircleDollarRegularIcon,
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
} satisfies Meta<typeof LabelPairedLightUserTieCircleDollarRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLightUserTieCircleDollarRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
