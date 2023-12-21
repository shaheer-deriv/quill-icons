import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFacebookMdIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFacebookMdIcon',
  component: LabelPairedFacebookMdIcon,
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
} satisfies Meta<typeof LabelPairedFacebookMdIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFacebookMdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
