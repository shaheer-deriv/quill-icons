import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedIpadosIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedIpadosIcon',
  component: LabelPairedIpadosIcon,
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
} satisfies Meta<typeof LabelPairedIpadosIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedIpadosIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
