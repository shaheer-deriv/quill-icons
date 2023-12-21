import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedTelegramMdIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedTelegramMdIcon',
  component: LabelPairedTelegramMdIcon,
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
} satisfies Meta<typeof LabelPairedTelegramMdIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedTelegramMdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
