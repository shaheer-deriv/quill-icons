import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneChevronLeftBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneChevronLeftBoldIcon',
  component: StandaloneChevronLeftBoldIcon,
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
} satisfies Meta<typeof StandaloneChevronLeftBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneChevronLeftBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
