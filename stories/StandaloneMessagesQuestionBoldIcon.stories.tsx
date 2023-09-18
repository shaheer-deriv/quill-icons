import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneMessagesQuestionBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneMessagesQuestionBoldIcon',
  component: StandaloneMessagesQuestionBoldIcon,
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
} satisfies Meta<typeof StandaloneMessagesQuestionBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneMessagesQuestionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
