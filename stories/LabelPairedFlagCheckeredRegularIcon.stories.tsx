import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFlagCheckeredRegularIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFlagCheckeredRegularIcon',
  component: LabelPairedFlagCheckeredRegularIcon,
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
} satisfies Meta<typeof LabelPairedFlagCheckeredRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFlagCheckeredRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
