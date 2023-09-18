import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMicrosoftStoreIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMicrosoftStoreIcon',
  component: LabelPairedMicrosoftStoreIcon,
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
} satisfies Meta<typeof LabelPairedMicrosoftStoreIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMicrosoftStoreIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
