import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedNineRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedNineRegularIcon',
  component: LabelPairedNineRegularIcon,
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
} satisfies Meta<typeof LabelPairedNineRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedNineRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
