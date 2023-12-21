import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFileShieldMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFileShieldMdBoldIcon',
  component: LabelPairedFileShieldMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedFileShieldMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFileShieldMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
