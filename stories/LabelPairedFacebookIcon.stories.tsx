import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFacebookIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFacebookIcon',
  component: LabelPairedFacebookIcon,
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
} satisfies Meta<typeof LabelPairedFacebookIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFacebookIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
