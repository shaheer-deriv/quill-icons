import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedDerivIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedDerivIcon',
  component: LabelPairedDerivIcon,
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
} satisfies Meta<typeof LabelPairedDerivIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedDerivIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
