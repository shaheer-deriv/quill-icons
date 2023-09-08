import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedInstagramIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedInstagramIcon',
  component: LabelPairedInstagramIcon,
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
} satisfies Meta<typeof LabelPairedInstagramIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedInstagramIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
