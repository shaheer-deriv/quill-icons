import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFlagCheckeredBoldIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFlagCheckeredBoldIcon',
  component: LabelPairedFlagCheckeredBoldIcon,
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
} satisfies Meta<typeof LabelPairedFlagCheckeredBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFlagCheckeredBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
