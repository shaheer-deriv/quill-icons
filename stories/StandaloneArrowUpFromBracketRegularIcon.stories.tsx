import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowUpFromBracketRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowUpFromBracketRegularIcon',
  component: StandaloneArrowUpFromBracketRegularIcon,
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
} satisfies Meta<typeof StandaloneArrowUpFromBracketRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowUpFromBracketRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
