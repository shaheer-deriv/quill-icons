import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneHorizontalRuleDashedRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneHorizontalRuleDashedRegularIcon',
  component: StandaloneHorizontalRuleDashedRegularIcon,
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
} satisfies Meta<typeof StandaloneHorizontalRuleDashedRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneHorizontalRuleDashedRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
