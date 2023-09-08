import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedImagePolaroidUserRegularIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedImagePolaroidUserRegularIcon',
  component: LabelPairedImagePolaroidUserRegularIcon,
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
} satisfies Meta<typeof LabelPairedImagePolaroidUserRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedImagePolaroidUserRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
