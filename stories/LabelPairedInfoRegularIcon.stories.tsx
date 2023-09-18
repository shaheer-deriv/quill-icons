import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedInfoRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedInfoRegularIcon',
  component: LabelPairedInfoRegularIcon,
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
} satisfies Meta<typeof LabelPairedInfoRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedInfoRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
