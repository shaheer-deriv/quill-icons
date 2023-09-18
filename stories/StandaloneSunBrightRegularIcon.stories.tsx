import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneSunBrightRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneSunBrightRegularIcon',
  component: StandaloneSunBrightRegularIcon,
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
} satisfies Meta<typeof StandaloneSunBrightRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneSunBrightRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
