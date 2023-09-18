import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneRightFromBracketBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneRightFromBracketBoldIcon',
  component: StandaloneRightFromBracketBoldIcon,
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
} satisfies Meta<typeof StandaloneRightFromBracketBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneRightFromBracketBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
