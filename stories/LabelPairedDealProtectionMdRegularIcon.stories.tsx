import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedDealProtectionMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedDealProtectionMdRegularIcon',
  component: LabelPairedDealProtectionMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedDealProtectionMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedDealProtectionMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
