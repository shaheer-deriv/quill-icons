import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMessagesQuestionBoldIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMessagesQuestionBoldIcon',
  component: LabelPairedMessagesQuestionBoldIcon,
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
} satisfies Meta<typeof LabelPairedMessagesQuestionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMessagesQuestionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
