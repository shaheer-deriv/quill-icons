import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneHorizontalRuleRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneHorizontalRuleRegularIcon',
  component: StandaloneHorizontalRuleRegularIcon,
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
} satisfies Meta<typeof StandaloneHorizontalRuleRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneHorizontalRuleRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
