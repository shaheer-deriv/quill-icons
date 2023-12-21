import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedBookmarkMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedBookmarkMdRegularIcon',
  component: LabelPairedBookmarkMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedBookmarkMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedBookmarkMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
