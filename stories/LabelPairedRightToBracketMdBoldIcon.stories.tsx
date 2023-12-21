import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedRightToBracketMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedRightToBracketMdBoldIcon',
  component: LabelPairedRightToBracketMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedRightToBracketMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedRightToBracketMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
