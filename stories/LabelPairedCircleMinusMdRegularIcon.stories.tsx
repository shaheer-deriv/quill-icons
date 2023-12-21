import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleMinusMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleMinusMdRegularIcon',
  component: LabelPairedCircleMinusMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleMinusMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleMinusMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
