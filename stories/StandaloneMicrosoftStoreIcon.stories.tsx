import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneMicrosoftStoreIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneMicrosoftStoreIcon',
  component: StandaloneMicrosoftStoreIcon,
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
} satisfies Meta<typeof StandaloneMicrosoftStoreIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneMicrosoftStoreIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
