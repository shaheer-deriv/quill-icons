import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneMicrosoftIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneMicrosoftIcon',
  component: StandaloneMicrosoftIcon,
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
} satisfies Meta<typeof StandaloneMicrosoftIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneMicrosoftIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
