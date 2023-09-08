import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMobileScreenButtonBoldIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMobileScreenButtonBoldIcon',
  component: LabelPairedMobileScreenButtonBoldIcon,
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
} satisfies Meta<typeof LabelPairedMobileScreenButtonBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMobileScreenButtonBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
