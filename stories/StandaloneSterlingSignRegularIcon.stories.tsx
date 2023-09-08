import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneSterlingSignRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneSterlingSignRegularIcon',
  component: StandaloneSterlingSignRegularIcon,
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
} satisfies Meta<typeof StandaloneSterlingSignRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneSterlingSignRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
