import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowDownAZBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowDownAZBoldIcon',
  component: StandaloneArrowDownAZBoldIcon,
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
} satisfies Meta<typeof StandaloneArrowDownAZBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowDownAZBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
