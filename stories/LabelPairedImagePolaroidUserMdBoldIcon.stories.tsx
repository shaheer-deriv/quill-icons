import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedImagePolaroidUserMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedImagePolaroidUserMdBoldIcon',
  component: LabelPairedImagePolaroidUserMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedImagePolaroidUserMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedImagePolaroidUserMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
