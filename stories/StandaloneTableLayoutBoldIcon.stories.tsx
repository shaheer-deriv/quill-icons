import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneTableLayoutBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneTableLayoutBoldIcon',
  component: StandaloneTableLayoutBoldIcon,
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
} satisfies Meta<typeof StandaloneTableLayoutBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneTableLayoutBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
