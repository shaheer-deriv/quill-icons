import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleBookmarkRegularIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleBookmarkRegularIcon',
  component: LabelPairedCircleBookmarkRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleBookmarkRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleBookmarkRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
