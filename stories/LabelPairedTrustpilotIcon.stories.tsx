import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedTrustpilotIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedTrustpilotIcon',
  component: LabelPairedTrustpilotIcon,
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
} satisfies Meta<typeof LabelPairedTrustpilotIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedTrustpilotIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
