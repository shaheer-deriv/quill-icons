import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedUbuntuIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedUbuntuIcon',
  component: LabelPairedUbuntuIcon,
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
} satisfies Meta<typeof LabelPairedUbuntuIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedUbuntuIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
