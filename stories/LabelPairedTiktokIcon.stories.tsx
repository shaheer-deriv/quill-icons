import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedTiktokIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedTiktokIcon',
  component: LabelPairedTiktokIcon,
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
} satisfies Meta<typeof LabelPairedTiktokIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedTiktokIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
