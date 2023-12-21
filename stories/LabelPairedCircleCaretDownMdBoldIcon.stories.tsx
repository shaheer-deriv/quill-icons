import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleCaretDownMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleCaretDownMdBoldIcon',
  component: LabelPairedCircleCaretDownMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleCaretDownMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleCaretDownMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
