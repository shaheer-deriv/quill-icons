import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowDownToBracketRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowDownToBracketRegularIcon',
  component: StandaloneArrowDownToBracketRegularIcon,
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
} satisfies Meta<typeof StandaloneArrowDownToBracketRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowDownToBracketRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
