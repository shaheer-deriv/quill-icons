import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedGoogleMdIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedGoogleMdIcon',
  component: LabelPairedGoogleMdIcon,
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
} satisfies Meta<typeof LabelPairedGoogleMdIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedGoogleMdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
