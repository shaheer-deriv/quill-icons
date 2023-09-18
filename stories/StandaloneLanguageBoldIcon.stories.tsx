import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneLanguageBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneLanguageBoldIcon',
  component: StandaloneLanguageBoldIcon,
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
} satisfies Meta<typeof StandaloneLanguageBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneLanguageBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
