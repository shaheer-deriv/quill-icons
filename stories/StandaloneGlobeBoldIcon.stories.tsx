import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneGlobeBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneGlobeBoldIcon',
  component: StandaloneGlobeBoldIcon,
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
} satisfies Meta<typeof StandaloneGlobeBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneGlobeBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
