import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleCaretDownMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleCaretDownMdRegularIcon',
  component: LabelPairedCircleCaretDownMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleCaretDownMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleCaretDownMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
