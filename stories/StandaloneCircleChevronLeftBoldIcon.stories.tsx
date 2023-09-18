import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleChevronLeftBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleChevronLeftBoldIcon',
  component: StandaloneCircleChevronLeftBoldIcon,
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
} satisfies Meta<typeof StandaloneCircleChevronLeftBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleChevronLeftBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
