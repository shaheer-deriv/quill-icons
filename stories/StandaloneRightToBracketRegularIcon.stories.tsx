import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneRightToBracketRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneRightToBracketRegularIcon',
  component: StandaloneRightToBracketRegularIcon,
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
} satisfies Meta<typeof StandaloneRightToBracketRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneRightToBracketRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
