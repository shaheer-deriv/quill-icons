import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedYoutubeIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedYoutubeIcon',
  component: LabelPairedYoutubeIcon,
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
} satisfies Meta<typeof LabelPairedYoutubeIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedYoutubeIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
