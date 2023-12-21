import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedComputerMouseScrollwheelMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedComputerMouseScrollwheelMdBoldIcon',
  component: LabelPairedComputerMouseScrollwheelMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedComputerMouseScrollwheelMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedComputerMouseScrollwheelMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
