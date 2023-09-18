import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneRightFromBracketRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneRightFromBracketRegularIcon',
  component: StandaloneRightFromBracketRegularIcon,
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
} satisfies Meta<typeof StandaloneRightFromBracketRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneRightFromBracketRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
