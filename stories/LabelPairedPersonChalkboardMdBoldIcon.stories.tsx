import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedPersonChalkboardMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedPersonChalkboardMdBoldIcon',
  component: LabelPairedPersonChalkboardMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedPersonChalkboardMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedPersonChalkboardMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
