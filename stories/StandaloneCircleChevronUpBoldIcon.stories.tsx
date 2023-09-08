import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleChevronUpBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleChevronUpBoldIcon',
  component: StandaloneCircleChevronUpBoldIcon,
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
} satisfies Meta<typeof StandaloneCircleChevronUpBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleChevronUpBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
