import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLinkedinMdIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLinkedinMdIcon',
  component: LabelPairedLinkedinMdIcon,
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
} satisfies Meta<typeof LabelPairedLinkedinMdIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLinkedinMdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
