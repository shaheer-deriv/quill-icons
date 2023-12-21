import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedKeyboardMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedKeyboardMdRegularIcon',
  component: LabelPairedKeyboardMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedKeyboardMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedKeyboardMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
