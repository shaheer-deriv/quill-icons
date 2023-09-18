import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLinuxIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLinuxIcon',
  component: LabelPairedLinuxIcon,
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
} satisfies Meta<typeof LabelPairedLinuxIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLinuxIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
