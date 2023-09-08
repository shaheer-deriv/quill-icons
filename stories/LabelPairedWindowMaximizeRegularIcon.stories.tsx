import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWindowMaximizeRegularIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWindowMaximizeRegularIcon',
  component: LabelPairedWindowMaximizeRegularIcon,
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
} satisfies Meta<typeof LabelPairedWindowMaximizeRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWindowMaximizeRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
