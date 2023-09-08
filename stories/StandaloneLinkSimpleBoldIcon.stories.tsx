import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneLinkSimpleBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneLinkSimpleBoldIcon',
  component: StandaloneLinkSimpleBoldIcon,
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
} satisfies Meta<typeof StandaloneLinkSimpleBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneLinkSimpleBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
