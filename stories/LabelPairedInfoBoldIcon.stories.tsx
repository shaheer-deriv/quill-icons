import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedInfoBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedInfoBoldIcon',
  component: LabelPairedInfoBoldIcon,
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
} satisfies Meta<typeof LabelPairedInfoBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedInfoBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
