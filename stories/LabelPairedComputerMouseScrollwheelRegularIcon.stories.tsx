import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedComputerMouseScrollwheelRegularIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedComputerMouseScrollwheelRegularIcon',
  component: LabelPairedComputerMouseScrollwheelRegularIcon,
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
} satisfies Meta<typeof LabelPairedComputerMouseScrollwheelRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedComputerMouseScrollwheelRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
