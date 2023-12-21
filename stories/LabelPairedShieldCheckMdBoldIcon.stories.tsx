import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedShieldCheckMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedShieldCheckMdBoldIcon',
  component: LabelPairedShieldCheckMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedShieldCheckMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedShieldCheckMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
