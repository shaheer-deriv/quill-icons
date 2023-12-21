import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChevronUpMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChevronUpMdRegularIcon',
  component: LabelPairedChevronUpMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedChevronUpMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChevronUpMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
