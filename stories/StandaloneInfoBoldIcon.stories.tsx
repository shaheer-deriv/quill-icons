import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneInfoBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneInfoBoldIcon',
  component: StandaloneInfoBoldIcon,
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
} satisfies Meta<typeof StandaloneInfoBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneInfoBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
