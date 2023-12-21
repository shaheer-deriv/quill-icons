import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedEuroSignMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedEuroSignMdRegularIcon',
  component: LabelPairedEuroSignMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedEuroSignMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedEuroSignMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
