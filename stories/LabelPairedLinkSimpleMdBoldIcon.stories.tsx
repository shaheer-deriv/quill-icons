import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLinkSimpleMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLinkSimpleMdBoldIcon',
  component: LabelPairedLinkSimpleMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedLinkSimpleMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLinkSimpleMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
