import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedTiktokMdIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedTiktokMdIcon',
  component: LabelPairedTiktokMdIcon,
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
} satisfies Meta<typeof LabelPairedTiktokMdIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedTiktokMdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
