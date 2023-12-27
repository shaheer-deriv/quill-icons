import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedXTwitterMdIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedXTwitterMdIcon',
  component: LabelPairedXTwitterMdIcon,
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
} satisfies Meta<typeof LabelPairedXTwitterMdIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedXTwitterMdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
