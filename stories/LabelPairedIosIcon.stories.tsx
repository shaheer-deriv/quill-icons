import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedIosIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedIosIcon',
  component: LabelPairedIosIcon,
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
} satisfies Meta<typeof LabelPairedIosIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedIosIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
