import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedRightToBracketMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedRightToBracketMdRegularIcon',
  component: LabelPairedRightToBracketMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedRightToBracketMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedRightToBracketMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
