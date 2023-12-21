import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedBarsFilterMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedBarsFilterMdRegularIcon',
  component: LabelPairedBarsFilterMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedBarsFilterMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedBarsFilterMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
