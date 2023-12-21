import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleArrowRightMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleArrowRightMdRegularIcon',
  component: LabelPairedCircleArrowRightMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleArrowRightMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleArrowRightMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
