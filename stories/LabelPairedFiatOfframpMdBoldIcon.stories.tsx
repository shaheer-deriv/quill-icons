import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFiatOfframpMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFiatOfframpMdBoldIcon',
  component: LabelPairedFiatOfframpMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedFiatOfframpMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFiatOfframpMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
