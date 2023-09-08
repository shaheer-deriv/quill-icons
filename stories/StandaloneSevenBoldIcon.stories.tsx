import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneSevenBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneSevenBoldIcon',
  component: StandaloneSevenBoldIcon,
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
} satisfies Meta<typeof StandaloneSevenBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneSevenBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
