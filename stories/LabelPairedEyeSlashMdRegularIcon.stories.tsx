import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedEyeSlashMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedEyeSlashMdRegularIcon',
  component: LabelPairedEyeSlashMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedEyeSlashMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedEyeSlashMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
