import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCaretUpBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneCaretUpBoldIcon',
  component: StandaloneCaretUpBoldIcon,
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
} satisfies Meta<typeof StandaloneCaretUpBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCaretUpBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
