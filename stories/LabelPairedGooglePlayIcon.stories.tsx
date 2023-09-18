import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedGooglePlayIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedGooglePlayIcon',
  component: LabelPairedGooglePlayIcon,
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
} satisfies Meta<typeof LabelPairedGooglePlayIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedGooglePlayIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
