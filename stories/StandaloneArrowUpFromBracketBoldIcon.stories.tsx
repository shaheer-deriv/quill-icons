import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowUpFromBracketBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowUpFromBracketBoldIcon',
  component: StandaloneArrowUpFromBracketBoldIcon,
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
} satisfies Meta<typeof StandaloneArrowUpFromBracketBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowUpFromBracketBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
