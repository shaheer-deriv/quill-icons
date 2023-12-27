import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedIpadosMdIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedIpadosMdIcon',
  component: LabelPairedIpadosMdIcon,
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
} satisfies Meta<typeof LabelPairedIpadosMdIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedIpadosMdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
