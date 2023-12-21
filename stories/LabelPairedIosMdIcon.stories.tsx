import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedIosMdIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedIosMdIcon',
  component: LabelPairedIosMdIcon,
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
} satisfies Meta<typeof LabelPairedIosMdIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedIosMdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
