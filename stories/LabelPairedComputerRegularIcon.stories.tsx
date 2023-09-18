import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedComputerRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedComputerRegularIcon',
  component: LabelPairedComputerRegularIcon,
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
} satisfies Meta<typeof LabelPairedComputerRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedComputerRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
