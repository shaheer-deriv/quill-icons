import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedGrid2RegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedGrid2RegularIcon',
  component: LabelPairedGrid2RegularIcon,
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
} satisfies Meta<typeof LabelPairedGrid2RegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedGrid2RegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
