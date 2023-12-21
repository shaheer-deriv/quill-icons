import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMobileScreenButtonMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMobileScreenButtonMdRegularIcon',
  component: LabelPairedMobileScreenButtonMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedMobileScreenButtonMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMobileScreenButtonMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
