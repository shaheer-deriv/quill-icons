import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChevronDownMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChevronDownMdRegularIcon',
  component: LabelPairedChevronDownMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedChevronDownMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChevronDownMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
